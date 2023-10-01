import Product from "../../Models/Product";
import ProductGraph from "../../Models/ProductGraph";
import IProductService from "./IProductService";

export default class ProductService implements IProductService {
  getMainInfoFromProducts(): Product[] | undefined {
    throw new Error("Method not implemented.");
  }
  getProducts(): Product[] {
    throw new Error("Method not implemented.");
  }
  getProductById(id: number): Product | undefined {
    throw new Error("Method not implemented.");
  }
}
