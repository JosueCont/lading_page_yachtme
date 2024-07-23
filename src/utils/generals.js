export const currencyConverse = (actualCurrency, price, currencytoApply, currencyExchange) => {

    const exchangeValues =
      actualCurrency != currencytoApply
        ? currencyExchange.find((x) => x.baseCurrency == actualCurrency && x.targetCurrency == currencytoApply)
        : {};
  
    const exchange = exchangeValues?.exchangeRate
      ? exchangeValues?.exchangeRate
      : 1;
     
    return actualCurrency
      ? Math.ceil(price * exchange)
      : Math.ceil(price);
  
  };