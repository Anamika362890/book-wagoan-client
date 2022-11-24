import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Button from '../Shared/Button/Button';
import useTitle from './../../Hooks/Hooks';

const Signup = () => {
    useTitle('Register')
    const { register, formState: { errors }, handleSubmit
    } = useForm();
    const { createUser } = useContext(AuthContext)

    const handleLogin = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className='hero bg-gradient-to-r from-blue-300 to-blue-900 text-white '>
                <div className=' w-[450px] text-center m-32 p-10 rounded-2xl bg-white ' >
                    <h1 className='text-4xl font-bold mb-6 text-blue-900 '>Sign Up</h1>
                    <form className=' ml-8' onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs text-gray-600 my-4">

                            <input placeholder="Your Name" type="name" {...register("name", { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

                        </div>

                        <div className="form-control w-full text-gray-600  mb-4">

                            <input placeholder="Your Email" type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                        </div>
                        <div className="form-control w-full mb-4 max-w-xs">
                            <select placeholder="Select" {...register("category", { required: "Please choose one" })} className='text-gray-600 input input-bordered w-full max-w-xs' >
                                <option value="">Select...</option>
                                <option value="Seller">Seller</option>
                                <option value="Buyer">Buyer</option>
                            </select>

                        </div>
                        <div className="form-control w-full max-w-xs">

                            <input placeholder="Your Password" type="password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })} className=" text-gray-600 input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>




                        <div className='py-6'>
                            <Button>Register</Button>
                        </div>

                    </form>


                    <p className='text-gray-600'>Already Register? Please, <Link to='/login' className='text-blue-900 font-bold'>Login</Link></p>

                    <div className="flex flex-col w-full border-opacity-50">



                    </div>


                </div>
            </div>
        </div>
    );
};

export default Signup;