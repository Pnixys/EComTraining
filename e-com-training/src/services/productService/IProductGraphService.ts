import ProductGraph from "../../Models/ProductGraph";

export default interface IProductGraphService {
  getGraphById(id: number): ProductGraph | undefined;
}
