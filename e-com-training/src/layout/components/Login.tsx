import React, { useState } from 'react'
import { logIn } from '../../app/user/userSlice'
import IUserService from '../../services/userService/IUserService';
import UserService from '../../services/userService/UserService';
import { useDispatch } from 'react-redux';
import User from '../../Models/User';

const Login = ({ setShowLogin }: any) => {
    const _userService: IUserService = new UserService();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const connectUser = () => {
        if (userName !== '' && password !== '') {
            const userId = _userService.verifyUserAndPassword(userName, password);

            if (userId !== -1) {
                const user: User | undefined = _userService.getUserById(userId);
                dispatch(logIn(user));
                setShowLogin(false);
            }
        }
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
                onClick={() => setShowLogin(false)}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div
                        onKeyDown={(e) => handleKeyDown(e)}
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-stone-800 p-5">
                        <h2 className=" text-2xl">Log In to NFT Looker </h2>
                        <div className='flex flex-col px-2 my-5 gap-5'>
                            <div>
                                <h3>Name</h3>
                                <input
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    type="text"
                                    name='user name'
                                    className='border border-slate-500 rounded-lg p-1 focus:outline-purple-400' />
                            </div>
                            <div>
                                <h3>Password</h3>
                                <input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type="password"
                                    name="user Password"
                                    className='border border-slate-500 rounded-lg p-1 focus:outline-purple-400' />
                            </div>
                        </div>
                        <div className='flex gap-2 justify-end'>
                            <button className='text-red-600 hover:bg-red-100 p-2 rounded-md' onClick={() => setShowLogin(false)}>Close</button>
                            <input
                                value="Log In"
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

export default Login

