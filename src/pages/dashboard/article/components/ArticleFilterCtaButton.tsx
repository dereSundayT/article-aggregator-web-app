import React from "react";

interface ArticleFilterCtaButtonProps {
    handleModal: any
}
export const ArticleFilterCtaButton: React.FC<ArticleFilterCtaButtonProps> = ({handleModal}) => {
    return (
        <div className="flex justify-end w-full mb-5">
            <button onClick={() => handleModal()}
                    className="mt-4 bg-pretty text-black py-2 px-4 rounded-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                     fill="currentColor">
                    <path fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L13 10.414V15a1 1 0 01-.293.707l-2 2A1 1 0 019 17v-6.586L3.293 6.707A1 1 0 013 6V4z"
                          clipRule="evenodd"/>
                </svg>
                Filter
            </button>
        </div>
    )
}