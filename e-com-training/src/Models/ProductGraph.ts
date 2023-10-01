export default interface ProductGraph {
  id: number;
  priceHistory: Array<{ date: Date; price: number }>;
}
