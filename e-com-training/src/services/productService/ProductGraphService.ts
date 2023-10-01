import ProductGraph from "../../Models/ProductGraph";
import IProductGraphService from "./IProductGraphService";
import { graphProductArray } from "../mock_data/mockdata_product";

export default class ProductGraphService implements IProductGraphService {
  getGraphById(id: number): ProductGraph | undefined {
    return graphProductArray.find((product) => product.id === id);
  }
}
