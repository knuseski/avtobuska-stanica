import { Category } from '@/database/models';

export const DELETE = async (req, { params }) => {
    const id = params.id;
    try {
        await Category.destroy({
            where: { id }
        });
        return new Response('OK', { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(`Cannot delete category with id [${id}]. ${error.message}`, {
            status: 500
        });
    }
};

export const POST = async (req, { params }) => {
    const id = params.id;
    const category = await req.json();
    try {
        await Category.update(category, {
            where: { id }
        });
        return new Response('OK', { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(`Cannot delete category with id [${id}]. ${error.message}`, {
            status: 500
        });
    }
};
