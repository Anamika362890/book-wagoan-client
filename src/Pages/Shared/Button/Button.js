import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button className='btn bg-gradient-to-r from-blue-800 to-blue-700 border-none  '>{children}</button>


        </div>
    );
};

export default Button;