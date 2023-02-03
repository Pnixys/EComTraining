import React from 'react'
import Product from '../../../Models/Product'

const Card = (product: Product) => {
    return (
        <div id='card' className='rounded-sm opacity-100 h-[18rem] w-[15rem] shadow-lg m-10 
                   hover:shadow-2xl ease-in-out duration-300 grid justify-items-center'>
            {
                (product.image != null)
                    ? <img
                        src={product.image}
                        alt={product.mainInfosProduct.name}
                        className='mt-2' />
                    : <h2>No image for the moment</h2>
            }
            <h2 className='text-xl'>{product.mainInfosProduct.name}</h2>
            <p className='truncate'>{product.mainInfosProduct.description}</p>
        </div>
    )
}


export default Card