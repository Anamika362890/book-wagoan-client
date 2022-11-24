import React, { useContext, useState } from 'react';
import Button from '../Shared/Button/Button';
import google from '../../assest/google.webp'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useTitle from '../../Hooks/Hooks';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    useTitle('Login')
    const { logIn, providerLogin } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit
    } = useForm();
    const [loginError, setLoginError] = useState('')
    const googleProvider = new GoogleAuthProvider()


    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);





            })
            .catch(error => console.error(error))

    }


    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);


            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            });
    }







    return (
        <div className='hero bg-gradient-to-r from-blue-300 to-blue-900 text-white '>
            <div className='text-center md:m-32 md:p-10 rounded-2xl bg-white mx-10 my-12 py-12 px-6 ' >
                <h1 className='text-4xl font-bold mb-6 text-blue-900'>Login</h1>
                <form className=' m-10  md:ml-8' onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs text-gray-600 my-4">

                        <input placeholder="Your email" type="email" {...register("email", { required: "Email is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                    </div>




                    <div className="form-control w-full max-w-xs">

                        <input placeholder="Your Password" type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, }
                        })} className=" text-gray-600 input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div>
                        {
                            loginError && <p className='text-red-600'>{loginError.slice(9, 50)} </p>
                        }
                    </div>

                    <div className='py-6'>
                        <Button>Login</Button>
                    </div>



                </form>



                <p className='text-gray-400'>New Here? Please, <Link to='/signup' className='text-blue-900 font-bold'>Sign Up</Link></p>

                <div className="flex flex-col w-full border-opacity-50">

                    <div className="divider text-gray-400">OR</div>
                    <button onClick={handleGoogleLogin} className='btn btn-outline '>
                        <img className='h-10' src={google} alt='' />

                        Log in with google</button>
                </div>


            </div>
        </div>
    );
};

export default Login;