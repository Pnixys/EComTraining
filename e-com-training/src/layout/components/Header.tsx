import React from 'react'
import { logo } from '../../assets'
import ReactSwitch from 'react-switch'

type Props = {
    theme: string,
    toggleTheme: () => void
}

const Header = ({ theme, toggleTheme }: Props) => {
    return (
        <div className="grid grid-cols-3 content-center h-16">
            <img
                src={logo}
                className='h-20'>
            </img>
            <h1 className='place-self-center text-4xl p-2'>
                NFT Looker
            </h1>
            <div className="flex items-center justify-end gap-2 mr-10">
                <button type='button' className='border p-1 rounded-md'>SignIn</button>
                <button type='button' className='border p-1 rounded-md'>LogIn</button>
                <ReactSwitch
                    className=''
                    onChange={toggleTheme}
                    checked={theme === "theme-dark"}
                    onColor='#fc850d'
                    offColor='#6f36ba' />
            </div>

        </div>
    )
}

export default Header