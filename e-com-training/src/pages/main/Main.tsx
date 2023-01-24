import React, { useState }from 'react'
import { Link } from "react-router-dom";
import { Card } from './'
import { getAllDatas } from '../../services/getMockData'

const Main = () => {
    const [allProducts, setAllProducts ] = useState(getAllDatas());
    return (
        <div className='grid grid-cols-1 place-content-center md:grid-cols-3 lg:grid-cols-5'>
            {allProducts.map((product) =>(
                <Link   to={`productDetails/${product.key}`}
                        state={{ product: product}}>
                    <Card {...product} />
                </Link>
            ))}
        </div>);
}



export default Main