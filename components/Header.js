'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();

    return (
        <header className="bg-gray-400 mb-10 p-2 shadow-lg pl-10">
            <nav className="flex gap-10 items-center">
                <Image
                    className="object-contain rounded-full cursor-pointer"
                    onClick={() => router.push('/')}
                    src="/logo.jpg"
                    alt="Logo"
                    width={40}
                    height={40}
                />
                <Link href="/categories">CATEGORIES</Link>
                <Link href="/products">PRODUCTS</Link>
            </nav>
        </header>
    );
};

export default Header;
