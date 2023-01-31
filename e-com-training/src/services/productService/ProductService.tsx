import MainInfosProduct from "../../Models/MainInfosProduct";
import Product from "../../Models/Product";
import IProductService from "./IProductService";

export default class ProductService implements IProductService{
    getMainInfoFromProducts(): MainInfosProduct[] | undefined {
        throw new Error("Method not implemented.");
    }
    getProducts(): Product[] {
        throw new Error("Method not implemented.");
    }
    getProductById(id: number): Product | undefined {
        throw new Error("Method not implemented.");
    }

}