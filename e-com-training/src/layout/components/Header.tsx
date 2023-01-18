import React from 'react'
import { logo } from '../../assets'

const Header = () => {
    return (
        <div className="grid grid-cols-3 content-center bg-gray-700 h-16">
            <img
                src={logo}
                className="object-scale-down h-14 w-16"/>
            <h1 className=' text-white place-self-center p-2 hover:border hover:rounded-2xl hover:bg-green-600 hover:border-green-800 duration-300 hover:ease-in'>
                Nom du site
            </h1>
            <button className='text-white justify-self-end mr-2'>
                Potential menu
            </button>
        </div>
    )
}

export default Header