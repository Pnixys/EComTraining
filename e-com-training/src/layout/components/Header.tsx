import React from 'react'
import { logo } from '../../assets'
import ReactSwitch from 'react-switch'

type Props = {
    theme: string,
    toggleTheme: Function
}

const Header = ({ theme, toggleTheme }:Props) => {
    return (
        <div className="grid grid-cols-3 content-center h-16">
            <img
                src={logo}
                className="object-scale-down h-14 w-16"/>
            <h1 className=' text-white place-self-center p-2'>
                Nom du site
            </h1>
            <ReactSwitch onChange={() => toggleTheme} checked={theme === "theme-dark"}/>
        </div>
    )
}

export default Header