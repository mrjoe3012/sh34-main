import React from 'react';

interface ErrorPopupProps {
    message: string;
    onClose: () => void;
}

export const ErrorPopup = (props: ErrorPopupProps) => {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-300 p-4 z-50">
            <div className='text-center'>
                <p>{props.message}</p>
                <button onClick={props.onClose} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Close
                </button>
            </div>
        </div>
    )
};
