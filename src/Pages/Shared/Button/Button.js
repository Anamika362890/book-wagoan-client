import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button className='btn border-none bg-gradient-to-r from-blue-800 to-blue-900'>{children}</button>


        </div>
    );
};

export default Button;