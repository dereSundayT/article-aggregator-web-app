import React from "react";

interface ArticleEmptyStateProps {
    totalNo: number
}

export const ArticleEmptyState: React.FC<ArticleEmptyStateProps> = ({ totalNo }) => {
    const items = Array.from({ length: totalNo }, (_, index) => (
        <div key={index} className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    ));

    return <>{items}</>;
};