import MainInfosProduct from "./MainInfosProduct"

export default interface Product {
    mainInfosProduct: MainInfosProduct,
    image: string,
    priceHistory: Array<{"date": Date, "price": number}>
} 