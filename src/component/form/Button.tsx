import React from "react";

interface ButtonProps {
    actionType: "submit" | "button" | "reset"
    className?: string
    btnText: string
}

export const Button: React.FC<ButtonProps> = ({actionType, btnText, className}) => {
    return (
        <>
            <button
                type={actionType}
                className={
                    className
                        ?
                        className
                        :
                        "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>
                {btnText}
            </button>


        </>

    )
}