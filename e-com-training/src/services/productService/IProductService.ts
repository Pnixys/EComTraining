import Product from "../../Models/Product";
import ProductGraph from "../../Models/ProductGraph";

export default interface IProductService {
  getProducts(): Product[];
  getProductById(id: number): Product | undefined;
  getMainInfoFromProducts(): Product[] | undefined;
}
