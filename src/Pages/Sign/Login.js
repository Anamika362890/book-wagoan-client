import React from 'react';
import Button from '../Shared/Button/Button';
import google from '../../assest/google.webp'

const Login = () => {
    return (
        <div className='hero bg-gradient-to-r from-blue-300 to-blue-900 text-white '>
            <div className='text-center m-32 p-20 rounded-2xl bg-white ' >
                <h1 className='text-4xl font-bold mb-6 text-blue-900'>Login</h1>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                <div className='my-7 '>
                    <Button>Login</Button>
                </div>

                <p className='text-gray-400'>New Here? Please, <span className='text-blue-900 font-bold'>Sign Up</span></p>

                <div className="flex flex-col w-full border-opacity-50">

                    <div className="divider text-gray-400">OR</div>
                    <button className='btn btn-outline'>
                        <img className='h-10' src={google} alt='' />

                        Log in with google</button>
                </div>


            </div>
        </div>
    );
};

export default Login;