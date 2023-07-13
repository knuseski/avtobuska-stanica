import { Product } from '@/database/models';

export const DELETE = async (req, { params }) => {
    const id = params.id;
    try {
        await Product.destroy({
            where: { id }
        });
        return new Response('OK', { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(`Cannot delete product with id [${id}]. ${error.message}`, {
            status: 500
        });
    }
};

export const POST = async (req, { params }) => {
    const id = params.id;
    const category = await req.json();
    try {
        await Product.update(category, {
            where: { id }
        });
        return new Response('OK', { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(`Cannot delete product with id [${id}]. ${error.message}`, {
            status: 500
        });
    }
};
