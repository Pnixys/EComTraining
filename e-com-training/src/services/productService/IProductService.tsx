import Product from '../../Models/Product';

export default interface IProductService {
    getProducts(): Product[];
    getProductById(id: number): Product | undefined;
}