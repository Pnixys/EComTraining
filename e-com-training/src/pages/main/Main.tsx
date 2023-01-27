import React, { useState }from 'react'
import { Link } from "react-router-dom";
import { Card } from './'
import MockProductService from '../../services/productService/MockProductService'
import IProductService from '../../services/productService/IProductService';
import ProductService from '../../services/productService/ProductService';

const Main = () => {
    const _productService: IProductService = new MockProductService();
    const [allProducts, setAllProducts ] = useState(_productService.getProducts());
    return (
        <div className='grid grid-cols-1 place-content-center md:grid-cols-3 lg:grid-cols-5'>
            {allProducts.map((product) =>(
                <Link   key={product.id}
                        to={`productDetails/${product.id}`}
                        state={{ product: product}}>
                    <Card {...product} />
                </Link>
            ))}
        </div>);
}



export default Main