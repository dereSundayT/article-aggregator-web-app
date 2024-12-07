import React from "react";

export const ArticleEmptyState: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="flex justify-center w-48 h-48 mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-full h-full text-slate-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 4h13M8 4a4 4 0 100 8h13a4 4 0 100-8H8zm0 8v8m4-8v8m4-8v8m4-8v8"
                    />
                </svg>
            </div>
            <h2 className="text-lg font-semibold text-slate-700">No articles found</h2>
            <p className="text-sm text-slate-500">
                Try adjusting your filters or search criteria.
            </p>
        </div>
    );
};
