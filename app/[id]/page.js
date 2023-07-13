'use client';

import { useEffect, useState } from 'react';
import { fetchActiveProductsByCategory } from '@/service/service';
import { ItemCard } from '@/components';

const ProductsByCategory = ({ params }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchActiveProductsByCategory(params.id).then((data) => setProducts(data));
    }, []);

    return (
        <div className="grid grid-cols-4 gap-5 mx-auto">
            {products.map((product) => (
                <ItemCard key={product.id} item={product} />
            ))}
        </div>
    );
};

export default ProductsByCategory;
