'use client';

import { useEffect, useState } from 'react';
import { fetchActiveCategories } from '@/service/service';
import { useRouter } from 'next/navigation';
import { ItemCard } from '@/components';

export default function Home() {
    const router = useRouter();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchActiveCategories().then((data) => setCategories(data));
    }, []);

    const handleSelectCategory = (category) => {
        router.push(`/${category.id}`);
    };

    return (
        <div className="grid grid-cols-4 gap-5 mx-auto">
            {categories.map((category) => (
                <ItemCard key={category.id} handleClick={handleSelectCategory} item={category} />
            ))}
        </div>
    );
}
