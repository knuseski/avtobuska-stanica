import { Product } from '@/database/models';

export const GET = async (req, { params }) => {
    const id = params.id;
    try {
        const products = await Product.findAll({
            where: {
                active: true,
                categoryId: id
            },
            attributes: ['id', 'name', 'description', 'price']
        });

        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(`Failed to fetch all products. ${error.message}`, { status: 500 });
    }
};
