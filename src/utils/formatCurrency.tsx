export default function formatCurrency(
  number: number,
  currency: string,
  locale: string = "pt-BR",
  options?: Intl.NumberFormatOptions
): string {
  try {
    const formatterOptions: Intl.NumberFormatOptions = {
      style: "currency",
      currency,
      ...options,
    };

    return new Intl.NumberFormat(locale, formatterOptions).format(number);
  } catch (error) {
    console.error("Erro ao formatar moeda:", error);
    return `${currency} ${number.toFixed(2)}`;
  }
}