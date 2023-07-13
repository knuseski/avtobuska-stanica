'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const CategoryTable = ({ categories, setCategory }) => {
    const itemsPerPage = 10;

    const [paginatedCategories, setPaginatedCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(0);

    useEffect(() => {
        setPaginatedCategories(categories.slice(0, itemsPerPage));
        setMaxPages(Math.ceil(categories.length / itemsPerPage));
    }, [categories]);

    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage;
        setPaginatedCategories(categories.slice(startIndex, startIndex + itemsPerPage));
    }, [page]);

    return (
        <div className="w-full">
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Number of Products</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedCategories.map((category) => (
                        <tr
                            className={
                                'cursor-pointer hover:!bg-gray-300 ' +
                                (!category.active
                                    ? '!bg-red-200'
                                    : category.numberOfProducts === 0
                                    ? '!bg-yellow-200'
                                    : '')
                            }
                            onClick={() => setCategory(category)}
                            key={category.id}
                        >
                            <td>{category.order}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>
                                {category.image && (
                                    <Image
                                        className="object-cover"
                                        src={category.image}
                                        alt={category.name}
                                        width={50}
                                        height={50}
                                    />
                                )}
                            </td>
                            <td>{category.numberOfProducts}</td>
                            <td>{category.active ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-5 flex gap-3">
                <button
                    disabled={page === 1}
                    onClick={() => setPage((prev) => (prev === 1 ? 1 : prev - 1))}
                >
                    &lt;
                </button>
                <button
                    disabled={page === maxPages}
                    onClick={() => setPage((prev) => (prev === maxPages ? maxPages : prev + 1))}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default CategoryTable;
