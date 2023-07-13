import Category from '@/database/models/category';

export const GET = async () => {
    try {
        const categories = await Category.findAll({
            where: {
                showOnMenu: true
            },
            attributes: ['id', 'name', 'description', 'image'],
            order: [['order', 'ASC']]
        });
        return new Response(JSON.stringify(categories), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(`Failed to fetch all categories. ${error.message}`, { status: 500 });
    }
};
