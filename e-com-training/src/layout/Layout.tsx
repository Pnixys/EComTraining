import React, { createContext, useState } from 'react';

import { logo } from '../assets';
import Footer from './components/Footer';

import ReactSwitch from 'react-switch';

export const ThemeContext = createContext({});

const Layout = ({ children }: any) => {

    const [theme, setTheme] = useState("theme-light");

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === "theme-light" ? "theme-dark" : "theme-light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme} className='flex flex-col h-screen justify-between'>
                <div className="grid grid-cols-3 content-center h-16">
                    <img
                        src={logo}
                        alt='logo of the website'
                        className="object-scale-down h-14 w-16" />
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
                <div className='mb-auto'>
                    {children}
                </div>
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}

export default Layout