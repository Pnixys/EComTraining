import React, { createContext, useState } from 'react';

import { logo } from '../assets';
import Footer from './components/Footer';

import ReactSwitch from 'react-switch';
import Header from './components/Header';

export const ThemeContext = createContext({});

const Layout = ({ children }: any) => {

    const [theme, setTheme] = useState("theme-light");

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === "theme-light" ? "theme-dark" : "theme-light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme} className='flex flex-col h-screen justify-between'>
                <Header theme={theme} toggleTheme={toggleTheme} />
                <div className='mb-auto'>
                    {children}
                </div>
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}

export default Layout