import React from "react";


interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage:React.FC<ErrorMessageProps> = ({message}: {message:string}) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-5 rounded relative" role="alert">
            <span className="block sm:inline">{message}</span>
        </div>
    );
}