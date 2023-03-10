import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../Context/AuthProvider';
import Button from '../Shared/Button/Button';
import useTitle from './../../Hooks/Hooks';
import toast from 'react-hot-toast';
import UseToken from '../../Hooks/useToken';

const Signup = () => {
    useTitle('Register')
    const { register, formState: { errors }, handleSubmit
    } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = UseToken(createdUserEmail);

    const navigate = useNavigate();




    if (token) {
        navigate('/')
    }

    const handleLogin = data => {
        console.log(data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const role = data.category;
                const pic = data.photoURL;

                toast.success("User Created Successfully");


                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photourl,




                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.category, data.photourl
                        );
                    })
                    .catch(err => console.log(err));

            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });
    }

    const saveUser = (name, email, role, photourl) => {
        const user = { name, email, role, photourl };
        fetch('https://book-wagon-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email);



            })
    }




    return (
        <div>
            <div className='hero bg-gradient-to-r from-blue-300 to-blue-900 text-white '>
                <div className='w-[340px] md:w-[450px] text-center md:m-32 md:p-10 my-14 py-10 rounded-2xl bg-white ' >
                    <h1 className='text-4xl font-bold mb-6 text-blue-900 '>Sign Up</h1>
                    <form className='md:ml-8 ml-3' onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs text-gray-600 my-4">

                            <input placeholder="Your Name" type="name" {...register("name", { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

                        </div>


                        <div className="form-control w-full max-w-xs text-gray-600 my-4">

                            <input placeholder="Your PhotoUrl" type="photourl" {...register("photourl")} className="input input-bordered w-full max-w-xs" />

                        </div>

                        <div className="form-control w-full text-gray-600  mb-4">

                            <input placeholder="Your Email" type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                        </div>
                        <div className="form-control w-full mb-4 max-w-xs">
                            <select placeholder="Select" {...register("category", { required: "Please choose one" })} className='text-gray-600 input input-bordered w-full max-w-xs' >

                                <option value="Buyer">Buyer</option>

                                <option value="Seller">Seller</option>                            </select>

                        </div>
                        <div className="form-control w-full max-w-xs">

                            <input placeholder="Your Password" type="password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })} className=" text-gray-600 input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                            {
                                signUpError && <p className='text-red-600'>{signUpError}</p>
                            }
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
