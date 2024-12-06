import React from 'react';

interface SuccessMessageProps {
    message: string;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
    return (
        <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 mb-5 rounded relative" role="alert">
            <span className="block sm:inline">{message}</span>
        </div>
    );
};