export const formatCurrency = (price: number, isCurrencyBefore?: boolean) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);

  if (!isCurrencyBefore) {
    return formattedPrice;
  }

  return `${formattedPrice.slice(-1, formattedPrice.length)} ${formattedPrice.slice(0, -2)}`;
};
