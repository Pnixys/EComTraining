import React, { useState } from 'react'
import UserService from '../../services/productService/UserService';
import IUserService from '../../services/productService/IUserService';

const Signin = ({ setShowSignin }: any) => {
    const _userService: IUserService = new UserService();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('');

    const connectUser = () => {

    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            connectUser();
        }
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onClick={() => setShowSignin(false)}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div
                        onKeyDown={(e) => handleKeyDown(e)}
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-stone-800 p-5">
                        <h2 className='text-2xl'>Create Account to NFT Looker</h2>
                        <div className='flex flex-col px-2 my-5 gap-5 justify-center'>
                            <div className='flex flex-col justify-center'>
                                <h3>Name</h3>
                                <input
                                    type="text"
                                    className='border border-slate-500 rounded-lg p-1 focus:outline-purple-400' />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h3>Email</h3>
                                <input
                                    type="email"
                                    className='border border-slate-500 rounded-lg p-1 focus:outline-purple-400' />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h3>Password</h3>
                                <input
                                    type="password"
                                    className='border border-slate-500 rounded-lg p-1 focus:outline-purple-400' />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h3>Confirm Password</h3>
                                <input
                                    type="password"
                                    className='border border-slate-500 rounded-lg p-1 focus:outline-purple-400' />
                            </div>
                        </div>
                        <div className='flex gap-2 justify-end'>
                            <button className='text-red-600 hover:bg-red-100 p-2 rounded-md' onClick={() => setShowSignin(false)}>Close</button>
                            <input
                                value="Sign In"
                                type="submit"
                                className='border rounded-md bg-purple-500  text-white p-2 hover:bg-purple-700'
                                onClick={connectUser} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Signin