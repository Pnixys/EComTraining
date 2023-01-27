export default interface Product {
    id: number;
    name: string;
    description : string;
    price: number;
    image: string;
    priceHistory: Array<{"date": Date, "price": number}>
} 