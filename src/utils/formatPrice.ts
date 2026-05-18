export const formatPrice = (value: number, currency = "NGN") => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(value);
};

export function readableDate(date) {
  const newDate = new Date(date);
  // Format with Time: May 15, 2026, 3:30 PM
  const readableDateTime = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(newDate);
  return readableDateTime;
}
