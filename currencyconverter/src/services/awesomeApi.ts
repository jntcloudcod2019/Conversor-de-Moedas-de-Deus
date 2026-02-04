/**
 * Cliente para a API de cotações economia.awesomeapi.com.br
 * Documentação: https://docs.awesomeapi.com.br/api-de-moedas
 *
 * Uso: defina VITE_AWESOMEAPI_TOKEN no .env para ativar o consumo real.
 */

import type { CurrencyCode } from "../types";
import type { CurrencyConverterData } from "../types";
import type { CurrencyApiResponse } from "./currencyApi";
import type { AllCurrenciesContract } from "./currencyMapper";
import { CurrencyMapper } from "./currencyMapper";

const BASE_URL = "https://economia.awesomeapi.com.br/json/last";

/** Item de resposta da AwesomeAPI (ex.: USDBRL) */
interface AwesomeApiItem {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

/** Resposta da API: chaves são pares sem hífen (USDBRL, EURBRL, ...) */
type AwesomeApiResponse = Record<string, AwesomeApiItem>;

function toApiData(item: AwesomeApiItem): CurrencyApiResponse {
  const bid = parseFloat(item.bid);
  const ask = parseFloat(item.ask);
  return {
    symbol: item.code?.toUpperCase() || "",
    tradeDate: item.create_date || new Date().toISOString(),
    bid: Number.isFinite(bid) ? bid : 0,
    ask: Number.isFinite(ask) ? ask : 0,
    change: 0,
    changeMonth: 0,
    changeYear: 0,
  };
}

/**
 * Monta o contrato AllCurrenciesContract a partir da resposta da AwesomeAPI.
 * A API retorna pares XXX-BRL (cotação em BRL). Inclui BRL com bid/ask 1 se solicitado.
 */
function responseToContract(
  response: AwesomeApiResponse,
  requestedCodes: string[]
): AllCurrenciesContract {
  const currencies: AllCurrenciesContract["currencies"] = [];

  for (const [key, item] of Object.entries(response)) {
    if (!item?.code) continue;
    const code = item.code.toUpperCase();
    currencies.push({
      code,
      apiData: toApiData(item),
    });
  }

  if (requestedCodes.includes("BRL")) {
    const hasBrl = currencies.some((c) => c.code === "BRL");
    if (!hasBrl) {
      currencies.push({
        code: "BRL",
        apiData: {
          symbol: "BRL",
          tradeDate: new Date().toISOString(),
          bid: 1,
          ask: 1,
          change: 0,
          changeMonth: 0,
          changeYear: 0,
        },
      });
    }
  }

  return { currencies };
}

/**
 * Busca cotações na AwesomeAPI e retorna dados no formato do conversor.
 *
 * @param currencyCodes - Códigos desejados (ex.: ['USD', 'EUR', 'BRL'])
 * @param baseCurrency - Moeda base para exchangeRates (ex.: 'USD')
 * @param apiToken - Token da API (query ?token= ou header x-api-key)
 */
export async function getCurrencyConverterDataFromAwesomeApi(
  currencyCodes: readonly CurrencyCode[],
  baseCurrency: string,
  apiToken: string
): Promise<CurrencyConverterData | null> {
  if (!apiToken?.trim()) return null;

  const codes = [...currencyCodes];
  const pairs = codes
    .filter((c) => c !== "BRL")
    .map((c) => `${c}-BRL`)
    .filter((p, i, arr) => arr.indexOf(p) === i);

  if (pairs.length === 0 && !codes.includes("BRL")) {
    return null;
  }

  if (pairs.length === 0) {
    const contract: AllCurrenciesContract = {
      currencies: [
        {
          code: "BRL",
          apiData: {
            symbol: "BRL",
            tradeDate: new Date().toISOString(),
            bid: 1,
            ask: 1,
            change: 0,
            changeMonth: 0,
            changeYear: 0,
          },
        },
      ],
    };
    return CurrencyMapper.mapContractToConverterDataAsync(contract, baseCurrency);
  }

  const url = `${BASE_URL}/${pairs.join(",")}?token=${encodeURIComponent(apiToken.trim())}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    const data: AwesomeApiResponse = await res.json();
    const contract = responseToContract(data, codes);
    if (contract.currencies.length === 0) return null;
    return CurrencyMapper.mapContractToConverterDataAsync(contract, baseCurrency);
  } catch {
    return null;
  }
}
