'use client';

import { INITIAL_PRODUCT_STATE } from '@/app/products/page';
import { createProduct, deleteProduct, editProduct, fetchCategories } from '@/service/service';
import { useEffect, useState } from 'react';

const ProductForm = ({ product, setProduct, onProductCreated }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then((data) => setCategories(data));
    }, []);

    const handleOnChange = (e) => {
        const key = e.target.id;
        const value = key === 'active' ? e.target.checked : e.target.value;
        setProduct((prev) => ({ ...prev, [key]: value }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        let response;
        if (product.id) {
            response = await editProduct(product);
        } else {
            response = await createProduct(product);
        }

        if (response.ok) {
            setProduct(INITIAL_PRODUCT_STATE);
            onProductCreated();
        }
    };

    const handleDeleteCategory = async (selectedCategory) => {
        if (selectedCategory.id) {
            const response = await deleteProduct(selectedCategory.id);

            if (response.ok) {
                setProduct(INITIAL_PRODUCT_STATE);
                onProductCreated();
            }
        }
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleOnSubmit}>
            <div className="flex flex-col">
                <label htmlFor="name">Product ID</label>
                <input
                    className="py-2 px-1 rounded"
                    type="text"
                    id="id"
                    disabled
                    value={product.id}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="name">Name*</label>
                <input
                    className="py-2 px-1 rounded"
                    autoFocus
                    type="text"
                    id="name"
                    placeholder="Product Name"
                    required
                    value={product.name}
                    onChange={handleOnChange}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="description">Description</label>
                <textarea
                    rows={5}
                    className="py-2 px-1 rounded"
                    id="description"
                    placeholder="Product Description"
                    value={product.description}
                    onChange={handleOnChange}
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="category">Category</label>
                <select
                    value={product.categoryId}
                    onChange={handleOnChange}
                    className="py-2 px-1 rounded"
                    id="categoryId"
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col">
                <label htmlFor="price">Price*</label>
                <input
                    className="py-2 px-1 rounded"
                    type="number"
                    id="price"
                    placeholder="Product Price"
                    required
                    value={product.price}
                    onChange={handleOnChange}
                />
            </div>

            <div className="flex gap-3 justify-center items-end">
                <label htmlFor="active">Show on Menu</label>
                <input
                    type="checkbox"
                    id="active"
                    checked={product.active}
                    onChange={handleOnChange}
                />
            </div>

            <div className="flex gap-2">
                <button className="w-fit px-4 py-2 rounded mt-6" type="submit">
                    Save
                </button>
                <button
                    className="w-fit px-4 py-2 rounded mt-6"
                    type="button"
                    onClick={() => setProduct(INITIAL_PRODUCT_STATE)}
                >
                    Clear
                </button>
                <button
                    className="w-fit px-4 py-2 rounded mt-6"
                    type="button"
                    onClick={() => handleDeleteCategory(product)}
                >
                    Delete
                </button>
            </div>
        </form>
    );
};

export default ProductForm;
