import { Category, Product } from '@/database/models';

export const GET = async () => {
    try {
        const products = await Product.findAll({
            include: {
                model: Category,
                as: 'category',
                attributes: ['name']
            },
            attributes: ['id', 'name', 'description', 'price', 'categoryId', 'active']
        });

        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(`Failed to fetch all products. ${error.message}`, { status: 500 });
    }
};

export const POST = async (req) => {
    const product = await req.json();
    try {
        await Product.create(product);
        return new Response('OK', { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(`Failed to create new product. ${error.message}`, { status: 500 });
    }
};
