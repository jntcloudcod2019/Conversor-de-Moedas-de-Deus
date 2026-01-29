/**
 * Mapeamento de código de moeda para código de país
 */
export const currencyToCountryMap: Record<string, string> = {
  "BRL": "BR",
  "USD": "US",
  "EUR": "DE", // Euro - usa Alemanha como representante
  "GBP": "GB",
  "JPY": "JP",
  "CNY": "CN",
  "OJY": "CN" // Mapeamento para OJY também aponta para China (CN)
};

/**
 * Serviço para obter código de país a partir do código de moeda
 */
export const getCountryCodeByCurrency = (currencyCode: string): string => {
  return currencyToCountryMap[currencyCode] || "US";
};
