import { Currency } from "../types";

const CURRENCY_DECIMALS: Record<string, number> = {
  JPY: 0,
  KRW: 0,
  VND: 0,
  HUF: 0,
  CLP: 0,
  ISK: 0,
  TWD: 0,
  KWD: 3,
  BHD: 3,
  JOD: 3,
  OMR: 3,
  TND: 3,
  LYD: 3,
};

export const getDecimals = (code: string): number =>
  CURRENCY_DECIMALS[code] ?? 2;

export const detectDecimalSeparator = (
  raw: string,
  defaultSeparator: string,
): string => {
  const lastComma = raw.lastIndexOf(",");
  const lastDot = raw.lastIndexOf(".");
  if (lastComma > lastDot && lastComma !== -1) return ",";
  if (lastDot > lastComma && lastDot !== -1) return ".";
  return defaultSeparator;
};

export const formatNumber = (
  num: number,
  decimals: number,
  decSep: string,
  thouSep: string,
): string => {
  if (num === 0) {
    return decimals > 0
      ? `0${decSep}${"0".repeat(decimals)}`
      : "0";
  }
  const fixed = num.toFixed(decimals);
  const [integerPart, decimalPart = ""] = fixed.split(".");
  const formattedInteger = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    thouSep,
  );
  return decimalPart
    ? `${formattedInteger}${decSep}${decimalPart}`
    : formattedInteger;
};

export const sanitizeRawInput = (
  value: string,
  decimals: number,
  decimalSeparator: string,
): string => {
  let raw = value.replace(/[^\d.,]/g, "");
  if (raw === "") return "";
  if (decimals === 0) return raw;

  const decSep = detectDecimalSeparator(raw, decimalSeparator);
  const parts = raw.split(decSep);
  const intPart = parts[0];
  const decPart = parts.slice(1).join("");
  if (parts.length === 1) return intPart;
  if (decPart === "") return `${intPart}${decSep}`;
  return `${intPart}${decSep}${decPart}`;
};

export const parseFormattedNumber = (
  formatted: string,
  decimals: number,
  decimalSeparator: string,
): number => {
  const raw = formatted.trim();
  if (raw === "" || raw === decimalSeparator) return 0;
  if (decimals === 0) {
    const digits = raw.replace(/[^\d]/g, "");
    if (digits === "") return 0;
    const num = parseInt(digits, 10);
    return Number.isNaN(num) ? 0 : num;
  }
  const decimalSep = detectDecimalSeparator(raw, decimalSeparator);
  const thousandSep = decimalSep === "," ? "." : ",";
  const cleaned = raw.replace(new RegExp(`\\${thousandSep}`, "g"), "");
  const normalized = cleaned.replace(new RegExp(`\\${decimalSep}`), ".");
  const num = parseFloat(normalized);
  return Number.isNaN(num) ? 0 : num;
};

export interface SummaryResult {
  summaryFromValue: number;
  summaryToValue: number;
  summaryDisplayFrom: string;
  summaryDisplayTo: string;
}

export interface SwapPayload {
  fromValue: number;
  toValue: number;
  hasFromInput: boolean;
  hasToInput: boolean;
  rawFromInput: string;
  rawToInput: string;
}

export const buildSummary = ({
  rawFromInput,
  rawToInput,
  fromValue,
  toValue,
  fromCurrency,
  toCurrency,
  decimalSeparator,
  thousandSeparator,
}: {
  rawFromInput: string;
  rawToInput: string;
  fromValue: number;
  toValue: number;
  fromCurrency: Currency;
  toCurrency: Currency;
  decimalSeparator: string;
  thousandSeparator: string;
}): SummaryResult => {
  const hasFromRaw = rawFromInput.trim() !== "";
  const hasToRaw = rawToInput.trim() !== "";
  const summaryFromValue = hasFromRaw
    ? parseFormattedNumber(
        rawFromInput,
        getDecimals(fromCurrency.code),
        decimalSeparator,
      )
    : fromValue;
  const summaryToValue = hasToRaw
    ? parseFormattedNumber(
        rawToInput,
        getDecimals(toCurrency.code),
        decimalSeparator,
      )
    : toValue;
  const summaryDisplayFrom = hasFromRaw
    ? rawFromInput
    : formatNumber(
        fromValue,
        getDecimals(fromCurrency.code),
        decimalSeparator,
        thousandSeparator,
      );
  const summaryDisplayTo = hasToRaw
    ? rawToInput
    : formatNumber(
        toValue,
        getDecimals(toCurrency.code),
        decimalSeparator,
        thousandSeparator,
      );
  return {
    summaryFromValue,
    summaryToValue,
    summaryDisplayFrom,
    summaryDisplayTo,
  };
};
