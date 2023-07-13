import Product from '@/database/models/product';
import Category from '@/database/models/category';

export const GET = async () => {
    try {
        const products = await Product.findAll({
            attributes: ['id', 'name', 'description', 'price', 'categoryId', 'showOnMenu']
        });

        // TODO fix the problem with associations
        const updated = await Promise.all(
            products.map(async (product) => {
                const category = await Category.findOne({
                    where: { id: product.dataValues.categoryId }
                });
                return { ...product.dataValues, categoryName: category.name };
            })
        );

        return new Response(JSON.stringify(updated), { status: 200 });
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
