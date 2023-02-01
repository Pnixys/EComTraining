import React from 'react'
import { logo } from '../../assets'
import ReactSwitch from 'react-switch'

type Props = {
    theme: string,
    toggleTheme: Function
}

// TODO: HEADER IS ACTUALLY USELESS

const Header = ({ theme, toggleTheme }: Props) => {
    return (
        <div className="grid grid-cols-3 content-center h-16 p-2 mb-5">
            <svg
                xmlns={logo}
                height="100px">
            </svg>
            <h1 className='place-self-center'>
                NFT Looker
            </h1>
            <div>
                <ReactSwitch onChange={() => toggleTheme} checked={theme === "theme-dark"} />
            </div>

        </div>
    )
}

export default Header