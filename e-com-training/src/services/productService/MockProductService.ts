import MainInfosProduct from "../../Models/MainInfosProduct";
import Product from "../../Models/Product";
import mockData from "../mock_data/mockdata_product";
import IProductService from "./IProductService";

export default class MockProductService implements IProductService {
  getMainInfoFromProducts(): MainInfosProduct[] | undefined {
    const products = this.getProducts();
    const mainInfosProduct: MainInfosProduct[] = [];
    products.forEach((product) => {
      mainInfosProduct.push(product.mainInfosProduct);
    });
    return mainInfosProduct;
  }
  getProducts(): Product[] {
    return mockData;
  }
  getProductById(id: number): Product | undefined {
    return mockData.find((product) => product.mainInfosProduct.id === id);
  }
}
