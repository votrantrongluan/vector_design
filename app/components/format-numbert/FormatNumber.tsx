export const FormatNumber =
  (fractionDigits = 0) =>
  (value: number) =>
    value
      .toFixed(fractionDigits)
      .replace(/\./g, ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
