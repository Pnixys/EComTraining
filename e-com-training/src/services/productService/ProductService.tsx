import Product from "../../Models/Product";
import IProductService from "./IProductService";

export default class ProductService implements IProductService{
    getProducts(): Product[] {
        throw new Error("Method not implemented.");
    }
    getProductById(id: number): Product | undefined {
        throw new Error("Method not implemented.");
    }

}