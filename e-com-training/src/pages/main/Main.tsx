import React, { useState }from 'react'
import { Card } from './'
import { getAllDatas } from '../../services/getMockData'

const Main = () => {
    const [allProducts, setAllProducts ] = useState(getAllDatas());
    return (
        <div className='grid grid-cols-1 place-content-center md:grid-cols-3 lg:grid-cols-5'>
            {allProducts.map((product) =>(
                <Card {...product} />
            ))}
        </div>);
}



export default Main