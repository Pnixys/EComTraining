import React from 'react'

const Card = (product:any) => {
    return (
        <div className='border rounded-sm bg-white h-[18rem] w-[15rem] shadow-lg shadow-purple-500 m-10 hover:shadow-lime-500 hover:shadow-2xl ease-in-out duration-300'>
            {product.name}
            {product.price}
        </div>
    )
}


export default Card