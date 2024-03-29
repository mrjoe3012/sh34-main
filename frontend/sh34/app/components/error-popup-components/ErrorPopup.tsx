import React from 'react';

interface ErrorPopupProps {
    message: string;
    onClose: () => void;
}

export const ErrorPopup = (props: ErrorPopupProps) => {
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

            <div className="flex flex-col justify-between w-[400px] h-[400px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-[4px] border-RES_ORANGE rounded-lg p-4 z-50">
                <div className='overflow-y-auto'>
                    <p className='text-3xl mb-5'> Error </p>
                    <p className='text-center font-league flex-grow overflow-auto h-100'>{props.message}</p>
                </div>
                <button onClick={props.onClose} className="mt-2 px-4 py-2 bg-RES_ORANGE text-white rounded hover:bg-[#f57607] w-[35%]">
                    Close
                </button>
            </div>
        </div>
    );
};