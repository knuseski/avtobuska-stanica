import { Category, Product } from '@/database/models';
import connection from '@/database/connection';

export const GET = async () => {
    try {
        const categories = await Category.findAll({
            include: {
                model: Product,
                as: 'products',
                attributes: []
            },
            attributes: [
                'id',
                'name',
                'description',
                'order',
                'active',
                'image',
                [
                    connection.literal(
                        '(SELECT COUNT(*) FROM products WHERE products.categoryId = Category.id)'
                    ),
                    'numberOfProducts'
                ]
            ],
            order: [
                ['active', 'DESC'],
                ['order', 'ASC'],
                ['numberOfProducts', 'DESC']
            ]
        });
        return new Response(JSON.stringify(categories), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(`Failed to fetch all categories. ${error.message}`, { status: 500 });
    }
};

export const POST = async (req) => {
    const category = await req.json();
    try {
        await Category.create(category);
        return new Response('OK', { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(`Failed to create new category. ${error.message}`, { status: 500 });
    }
};
