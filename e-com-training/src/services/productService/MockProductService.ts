import Product from "../../Models/Product";
import ProductGraph from "../../Models/ProductGraph";
import { productArray } from "../mock_data/mockdata_product";
import IProductService from "./IProductService";

export default class MockProductService implements IProductService {
  getMainInfoFromProducts(): Product[] | undefined {
    const products = this.getProducts();
    const mainInfosProduct: Product[] = [];
    products.forEach((product) => {
      mainInfosProduct.push(product);
    });
    return mainInfosProduct;
  }
  getProducts(): Product[] {
    return productArray;
  }
  getProductById(id: number): Product | undefined {
    return productArray.find((product) => product.id === id);
  }
}
