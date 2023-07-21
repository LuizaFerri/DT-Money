export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export const PriceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
