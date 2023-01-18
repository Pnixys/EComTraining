import React, { useState }from 'react'
import {Card} from './'

const Main = () => {
    const [allProducts, setAllProducts ] = useState(
        [
            {'key':1 ,'name': 'A', 'price': 10},
            {'key':2 ,'name': 'A', 'price': 10},
            {'key':3 ,'name': 'B', 'price': 20},
            {'key':4 ,'name': 'C', 'price': 30},
            {'key':5 ,'name': 'D', 'price': 40},
            {'key':6 ,'name': 'E', 'price': 50},
            {'key':7 ,'name': 'A', 'price': 10},
            {'key':8 ,'name': 'B', 'price': 20},
            {'key':9 ,'name': 'C', 'price': 30},
            {'key':10 ,'name': 'D', 'price': 40},
            {'key':11 ,'name': 'E', 'price': 50},
            {'key':12 ,'name': 'A', 'price': 10},
            {'key':13 ,'name': 'B', 'price': 20},
            {'key':14 ,'name': 'C', 'price': 30},
            {'key':15 ,'name': 'D', 'price': 40},
            {'key':16 ,'name': 'E', 'price': 50}
        ]
    );
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
            {allProducts.map((product) =>(
                <Card {...product} />
            ))}
        </div>);
}



export default Main