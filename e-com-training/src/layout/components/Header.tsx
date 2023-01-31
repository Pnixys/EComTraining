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
            <svg
                xmlns={logo}
                height="100px">
            </svg>
            <h1 className=' text-white place-self-center p-2'>
                Nom du site
            </h1>
            <ReactSwitch onChange={() => toggleTheme} checked={theme === "theme-dark"}/>
        </div>
    )
}

export default Header