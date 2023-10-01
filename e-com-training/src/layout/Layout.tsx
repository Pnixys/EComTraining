import React, { createContext, useState } from 'react';
import { Footer, Header, Login, Signin } from './'


export const ThemeContext = createContext({});

const Layout = ({ children }: any) => {
    const [theme, setTheme] = useState("theme-light");
    const [showLogin, setShowLogin] = useState(false);
    const [showSignin, setShowSignin] = useState(false);

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === "theme-light" ? "theme-dark" : "theme-light")
    }


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                id={theme}
                className='flex flex-col justify-between'>
                <Header
                    theme={theme}
                    toggleTheme={toggleTheme}
                    showLogin={showLogin}
                    setShowLogin={setShowLogin}
                    showSignin={showSignin}
                    setShowSignin={setShowSignin} />
                {showLogin && <Login setShowLogin={setShowLogin} />}
                {showSignin && <Signin setShowSignin={setShowSignin} />}
                <div className='mb-auto'>
                    {children}
                </div>
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}

export default Layout