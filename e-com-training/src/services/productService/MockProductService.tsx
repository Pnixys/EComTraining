import Product from "../../Models/Product";
import mockData from "../mock_data/mockdata";
import IProductService from "./IProductService";

export default class MockProductService implements IProductService {
    getProducts(): Product[] {
        return mockData;
    }
    getProductById(id: number): Product | undefined{
        return mockData.find(() => id === id);
    }

}
