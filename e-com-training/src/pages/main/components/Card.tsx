import React from 'react'
import Product from '../../../Models/Product'

const Card = (product: Product) => {
    return (
        <div id='card' className='group rounded-sm  h-[18rem] w-[15rem] shadow-lg m-10 
                   hover:shadow-2xl ease-in-out duration-300 block relative p-5'>
            {
                (product.image != null)
                    ? <img
                        src={product.image}
                        alt={product.name}
                        className='absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-50' />
                    : <h2>No image for the moment</h2>
            }
            <div className='flex flex-col relative text-center'>
                <h2
                    className='text-xl opacity-0 group-hover:opacity-100 transition-all'>
                    {product.name}
                </h2>
                <p className='text-7xl break-all text-ellipsis opacity-0 group-hover:opacity-100'>
                    {product.price}<span className='text-sm'>JGS</span>
                </p>
                <p
                    className='break-all translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all'>
                    {product.description}
                </p>
            </div>

        </div>
    )
}


export default Card