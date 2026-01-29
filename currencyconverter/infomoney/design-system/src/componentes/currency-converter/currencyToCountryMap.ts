export const currencyToCountryMap: Record<string, string> = {
    "BRL": "BR",
    "USD": "US",
    "EUR": "EU",
    "GBP": "GB",
    "JPY": "JP"
};

export const getCountryCodeByCurrency = (currencyCode: string): string => {
    return currencyToCountryMap[currencyCode] 
};
