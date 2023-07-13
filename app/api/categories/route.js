import Category from '@/database/models/category';

export const GET = async () => {
    try {
        const categories = await Category.findAll({
            attributes: ['id', 'name', 'description', 'order', 'showOnMenu', 'image'],
            order: [['order', 'ASC']]
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
