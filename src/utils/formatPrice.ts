export const formatPrice = (value: number, currency = "NGN") => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency:currency ,
    maximumFractionDigits: 0,
  }).format(value)
}
