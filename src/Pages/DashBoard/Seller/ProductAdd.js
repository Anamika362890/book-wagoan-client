import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Button from './../../Shared/Button/Button';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const ProductAdd = () => {
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;


    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {

            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data
        }
    })

    const handleAddProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const book = {
                        seeler_image: user.photoURL,

                        book_name: data.Pname,
                        book_image: imgData.data.url,
                        price: data.price,
                        Real_price: data.Rprice,
                        purchase_year: data.year,
                        location: data.location,
                        category_id: data.category,
                        seller_name: data.Sname,
                        condition_type: data.condition,
                        phon_no: data.phnno,
                        details: data.details,

                        posted_date: Date().slice(4, 15),
                        posted_time: Date().slice(16, 25),




                    }

                    // save product information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(book)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);

                            toast.success("Product Created Successfully");




                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:w-[1200px] mx-auto p-7'>
            <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className='md:grid grid-cols-3 gap-1'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("Pname", {
                            required: "Product name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.Pname && <p className='text-red-500'>{errors.Pname.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Original Price</span></label>
                        <input type="number" placeholder='Enter original price in taka ' {...register("Rprice", {
                            required: "Product original name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.Rprice && <p className='text-red-500'>{errors.Rprice.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Selling Price</span></label>
                        <input type="number" placeholder='Enter product price in taka' {...register("price", {
                            required: "Product price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="text" {...register("location", {
                            required: "Location is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Purchase year</span></label>
                        <input type="text"  {...register("year", {
                            required: "Purchase year is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.year && <p className='text-red-500'>{errors.year.message}</p>}
                    </div>





                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Seller Name</span></label>
                        <input defaultValue={user?.displayName} readOnly type="text" {...register("Sname", {
                            required: ""
                        })} className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product condition type</span></label>

                        <input type="text" {...register("condition", {
                            required: "Add books condition "
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Mobile number</span></label>
                        <input type="number" {...register("phnno", {
                            required: "Provide your mobile number"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.phnno && <p className='text-red-500'>{errors.phnno.message}</p>}

                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Select a category</span></label>
                        <select
                            {...register('category', { required: "Select a option" })}
                            className="select input-bordered w-full max-w-xs" >
                            <option disabled selected ></option>
                            {
                                categories.map(category => <option
                                    key={category._id}
                                    value={category.service_id}
                                >{category.name}</option>)
                            }


                        </select>
                        {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                    </div>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="w-full mb-6  text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50    " />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs  ">
                    <label className="label"> <span className="label-text">Details</span></label>
                    <textarea placeholder='Write here' className="textarea textarea-bordered" {...register("details", {
                        required: "Give some description"
                    })} />

                    {errors.details && <p className='text-red-500'>{
                        errors.category.details}</p>}

                </div>


                <div className='text-center my-16'>
                    <Button>Add a Product</Button>
                </div>
            </form>
        </div>
    );
};


export default ProductAdd;