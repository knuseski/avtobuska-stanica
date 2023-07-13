'use client';

import { CategoryForm, CategoryTable } from '@/components';
import { useEffect, useState } from 'react';
import { fetchCategories } from '@/service/service';

export const INITIAL_CATEGORY_STATE = {
    name: '',
    description: '',
    order: '',
    image: '',
    showOnMenu: false
};

const CategoryPage = () => {
    const [category, setCategory] = useState(INITIAL_CATEGORY_STATE);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then((data) => setCategories(data));
    }, []);

    const onCategoryCreated = () => {
        fetchCategories().then((data) => setCategories(data));
    };

    return (
        <>
            <h1 className="mb-5 font-bold">Manage Categories</h1>
            <div className="flex gap-10 w-full">
                <CategoryForm
                    category={category}
                    setCategory={setCategory}
                    onCategoryCreated={onCategoryCreated}
                />
                <CategoryTable categories={categories} setCategory={setCategory} />
            </div>
        </>
    );
};

export default CategoryPage;
