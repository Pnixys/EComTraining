import React from 'react'
import Product from '../../../Models/Product'

const Card = (product:Product) => {
    return (
        <div id='card' className='rounded-sm opacity-100 h-[18rem] w-[15rem] shadow-lg shadow-purple-500 m-10 
                    hover:shadow-lime-500 hover:shadow-2xl ease-in-out duration-300
                    grid justify-items-center text-white'>
            {
                (product.image != null) 
                ? <img 
                    src={product.image}
                    alt={product.name}
                    className='mt-2'/>
                : <h2>No image for the moment</h2>
                
            }
            <h2 className='text-xl'>{product.name}</h2>
            <p className='truncate'>{product.description}</p>
        </div>
    )
}


export default Card