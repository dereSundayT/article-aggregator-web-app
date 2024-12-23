import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/20/solid'
import React from "react";
import {PaginationProps} from "../../../../config/models/articleModel";
import {Link} from "react-router-dom";





export const Pagination: React.FC<PaginationProps> = ({
                                                          totalItems,
                                                          from,
                                                          to,
                                                          links,
                                                          handlePagination,
                                                          previous,
                                                          next
                                                      }) => {

    //Remove First and last item of the link array
    const modifiedLinks = links.slice(1, -1);

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <Link
                    to={"#0"}
                    onClick={() => handlePagination(previous)}
                    className="pagination-previous-sm">
                    Previous
                </Link>
                <Link
                    onClick={() => handlePagination(next)}
                    to="#0"
                    className=""
                >
                    Next
                </Link>
            </div>

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{from}</span>{' '}
                        to <span className="font-medium">{to}</span> of{' '}
                        <span className="font-medium">{totalItems}</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <Link
                            to="#0"
                            onClick={() => handlePagination(previous)}
                            className="pagination-previous">
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="size-5"/>
                        </Link>

                        {
                            modifiedLinks.map((link, i = 0) => (
                                link.url &&
                                <Link
                                    aria-current="page"
                                    key={i}
                                    to="#"
                                    onClick={() => handlePagination(link.url)}
                                    className={link.active ? "pagination-active" : "pagination-inactive"}
                                >
                                    {link.label}
                                </Link>
                            ))
                        }


                        <Link
                            onClick={() => handlePagination(next)}
                            to="#0"
                            className="pagination-next">
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon aria-hidden="true" className="size-5"/>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}
