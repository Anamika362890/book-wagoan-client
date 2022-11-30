import React from 'react';

const BlogModal = ({ question, answer, setBlogText }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-blue-900">{question}</h3>
                    <p className="py-5">{answer}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className='btn border-none bg-gradient-to-r from-blue-800 to-blue-900' >Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;