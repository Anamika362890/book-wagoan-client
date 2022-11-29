import React from 'react';

const VerifyModal = ({ title, message, closeModal, successAction, modalData }) => {
    return (
        <div>
            <input type="checkbox" id="Confirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label htmlFor="Confirmation-modal" className='btn  bg-gradient-to-r from-blue-800 to-blue-700 border-none' onClick={() => { successAction(modalData) }}  >Continue</label>

                        <label onClick={closeModal} htmlFor="Confirmation-modal" className="btn  bg-gradient-to-r from-blue-800 to-blue-700 border-none ">Cancel</label>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default VerifyModal;