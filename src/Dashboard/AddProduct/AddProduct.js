import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import Button from '../../Pages/Shared/Button/Button';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {

            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data
        }
    })

    const handleAddProduct = data => {
        console.log(data);
    }
    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("Pname", {
                        required: "Product name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Pname && <p className='text-red-500'>{errors.Pname.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Original Price</span></label>
                    <input type="text" {...register("Rprice", {
                        required: "Product original name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.Rprice && <p className='text-red-500'>{errors.Rprice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Selling Price</span></label>
                    <input type="text" {...register("price", {
                        required: "Product price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("price", {
                        required: "Location is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of use</span></label>
                    <input type="text" {...register("year", {
                        required: "Year of use is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.year && <p className='text-red-500'>{errors.year.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Date</span></label>
                    <input type="text" {...register("date", {
                        required: ""
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.date && <p className='text-red-500'>{errors.date.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Time</span></label>
                    <input type="text" {...register("time", {
                        required: ""
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.time && <p className='text-red-500'>{errors.time.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input type="text" {...register("Sname", {
                        required: ""
                    })} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product condition type</span></label>
                    <input type="text" {...register("condition", {
                        required: ""
                    })} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile number</span></label>
                    <input type="number" {...register("phno", {
                        required: "Provide your mobile number"
                    })} className="input input-bordered w-full max-w-xs" />

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select
                        {...register('category')}
                        className="select input-bordered w-full max-w-xs">
                        <option>Select A Category</option>
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category.name}
                            >{category.name}</option>)
                        }


                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="w-full mb-6  text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50    " />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <Button >Add a Product</Button>
            </form>
        </div>
    );
};


export default AddProduct;