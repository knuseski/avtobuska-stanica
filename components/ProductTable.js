'use client';

import { useEffect, useState } from 'react';

const ProductTable = ({ products, setProduct }) => {
    const itemsPerPage = 10;

    const [paginatedProducts, setPaginatedProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(0);

    useEffect(() => {
        setPaginatedProducts(products.slice(0, itemsPerPage));
        setMaxPages(Math.ceil(products.length / itemsPerPage));
    }, [products]);

    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage;
        setPaginatedProducts(products.slice(startIndex, startIndex + itemsPerPage));
    }, [page]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedProducts.map((product) => (
                        <tr onClick={() => setProduct(product)} key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.categoryName}</td>
                            <td>{product.price} mkd</td>
                            <td>{product.showOnMenu ? 'Yes' : 'No'}</td>
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

export default ProductTable;
