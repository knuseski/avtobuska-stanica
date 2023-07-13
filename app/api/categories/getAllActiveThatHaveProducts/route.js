import { Category, Product } from '@/database/models';
import connection from '@/database/connection';

export const GET = async () => {
    try {
        const categories = await Category.findAll({
            where: {
                active: true
            },
            include: {
                model: Product,
                as: 'products',
                attributes: []
            },
            attributes: ['id', 'name', 'description', 'image'],
            group: ['Category.id'],
            order: [['order', 'ASC']],
            having: connection.literal('COUNT(products.id) > 0')
        });

        return new Response(JSON.stringify(categories), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(`Failed to fetch all categories. ${error.message}`, { status: 500 });
    }
};
