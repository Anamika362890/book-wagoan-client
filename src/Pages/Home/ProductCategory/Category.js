import React from 'react';
import { Link } from 'react-router-dom';
import book from '../../../assest/012767900_1567496428-books-791923_1920.jpg'
import Button from '../../Shared/Button/Button';

const Category = ({ category }) => {
    const { name, img, service_id } = category;

    return (
        <div>
            <div className="card  h-44 shadow-2xl image-full">
                <figure><img src={img} alt="" className='w-full bg-gradient-to-r from-blue-800 to-blue-900' /></figure>
                <div className="card-body ">
                    <div>
                        <h2 className="text-center font-bold  text-white my-3 text-3xl ">{name}</h2>
                    </div>

                    <div className="card-actions mx-auto  ">
                        <Link name={name} to={`/products/${service_id}`}><Button >See All Books</Button></Link>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Category;