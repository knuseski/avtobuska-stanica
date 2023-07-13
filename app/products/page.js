'use client';

import { ProductForm, ProductTable } from '@/components';
import { useEffect, useState } from 'react';
import { fetchProducts } from '@/service/service';

export const INITIAL_PRODUCT_STATE = {
    id: '',
    name: '',
    description: '',
    price: '',
    categoryId: 1,
    active: false
};

const ProductsPage = () => {
    const [product, setProduct] = useState(INITIAL_PRODUCT_STATE);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data));
    }, []);

    const onProductCreated = () => {
        fetchProducts().then((data) => setProducts(data));
    };

    return (
        <>
            <h1 className="mb-5 font-bold">Manage Products</h1>
            <div className="flex gap-20 w-full">
                <ProductForm
                    product={product}
                    setProduct={setProduct}
                    onProductCreated={onProductCreated}
                />
                <ProductTable products={products} setProduct={setProduct} />
            </div>
        </>
    );
};

export default ProductsPage;
