import React, { createContext, useState } from 'react'

import { logo } from '../assets'
import Footer from './components/Footer'

import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null);

const Layout = ({children}) => {
    
    const [theme, setTheme] = useState("theme-light");

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === "theme-light" ? "theme-dark" : "theme-light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <div className="grid grid-cols-3 content-center h-16">
                    <img
                        src={logo}
                        alt='logo of the website'
                        className="object-scale-down h-14 w-16"/>
                    <h1 className='place-self-center p-2'>
                        Nom du site
                    </h1>
                    <ReactSwitch
                                className='justify-self-end mr-10'
                                onChange={toggleTheme} 
                                checked={theme === "theme-dark"}
                                onColor='#fc850d'
                                offColor='#6f36ba'/>
                </div>
                {children}
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}

export default Layout