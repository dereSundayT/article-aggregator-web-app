import React from "react";

export const ArticleFilter = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <form className="grid grid-cols-4 gap-4 w-full h-full p-4">
                <div className="flex flex-col col-span-4">
                    <label htmlFor="keywords" className="text-sm font-semibold text-gray-900">Keywords</label>
                    <input
                        type="text"
                        name="keywords"
                        id="keywords"
                        className="mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="flex flex-col col-span-2">
                    <label htmlFor="from-date" className="text-sm font-semibold text-gray-900">From Date</label>
                    <input
                        type="date"
                        name="from-date"
                        id="from-date"
                        className="mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="flex flex-col col-span-2">
                    <label htmlFor="to-date" className="text-sm font-semibold text-gray-900">To Date</label>
                    <input
                        type="date"
                        name="to-date"
                        id="to-date"
                        className="mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="flex flex-col col-span-2">
                    <label htmlFor="category" className="text-sm font-semibold text-gray-900">Category</label>
                    <select
                        name="category"
                        id="category"
                        className="mt-1 p-2 border border-gray-300 rounded-md"
                    >
                        <option value="all">All</option>
                        <option value="technology">Technology</option>
                        <option value="business">Business</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                    </select>
                </div>

                <div className="flex flex-col col-span-2">
                    <label htmlFor="source" className="text-sm font-semibold text-gray-900">Source</label>
                    <select
                        name="source"
                        id="source"
                        className="mt-1 p-2 border border-gray-300 rounded-md"
                    >
                        <option value="all">All</option>
                        <option value="cnn">CNN</option>
                        <option value="bbc">BBC</option>
                        <option value="fox">Fox</option>
                        <option value="nbc">NBC</option>
                        <option value="abc">ABC</option>
                    </select>
                </div>

                <div className="flex flex-col col-span-4">
                    <button className="mt-4 bg-blue-500 text-white p-2 rounded-md">Search</button>
                </div>
            </form>
        </div>
    )
}