import React from 'react'
import { logo } from '../../assets'
import ReactSwitch from 'react-switch'
import { useDispatch, useSelector } from 'react-redux'
import User from '../../Models/User'
import { connectedUser, disconnect } from '../../app/user/userSlice'
import { Link } from 'react-router-dom'

type Props = {
    theme: string,
    toggleTheme: () => void,
    showLogin: boolean,
    setShowLogin: (arg: boolean) => void,
    showSignin: boolean,
    setShowSignin: (arg: boolean) => void
}

const Header = ({ theme, toggleTheme, showLogin, setShowLogin, showSignin, setShowSignin }: Props) => {
    const user: User = useSelector(connectedUser);
    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-3 content-center h-16">
            <Link to='/'>
                <img
                    src={logo}
                    alt='Logo of NFT Looker'
                    className='h-20'>
                </img>
            </Link>
            <Link to="/" className='place-self-center'>
                <h1 className=' text-4xl p-2'>
                    NFT Looker
                </h1>
            </Link>
            <div className="flex items-center justify-end gap-2 mr-10">
                {user
                    ? <div>
                        <button type='button' className='border p-1 rounded-md mr-2' onClick={() => dispatch(disconnect())}>LogOut</button>
                        <span>{user.name}</span>
                    </div>
                    : <div>
                        <button type='button' className='border p-1 mr-2 rounded-md' onClick={() => setShowSignin(!showSignin)}>SignIn</button>
                        <button type='button' className='border p-1 rounded-md' onClick={() => setShowLogin(!showLogin)}>LogIn</button>
                    </div>
                }
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