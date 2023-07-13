export const fetchCategories = async () => {
    const response = await fetch('/api/categories');
    return await response.json();
};

export const fetchActiveCategories = async () => {
    const response = await fetch('/api/categories/getAllActive');
    return await response.json();
};

export const createCategory = async (category) => {
    return await fetch('/api/categories', {
        method: 'POST',
        body: JSON.stringify(category)
    });
};

export const editCategory = async (category) => {
    return await fetch(`/api/categories/${category.id}`, {
        method: 'POST',
        body: JSON.stringify(category)
    });
};

export const deleteCategory = async (id) => {
    return await fetch(`/api/categories/${id}`, {
        method: 'DELETE'
    });
};

// ------------------------------------------------------------------

export const fetchProducts = async () => {
    const response = await fetch('/api/products');
    return await response.json();
};

export const fetchActiveProductsByCategory = async (id) => {
    const response = await fetch(`/api/products/getAllActiveByCategory/${id}`);
    return await response.json();
};

export const createProduct = async (product) => {
    return await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(product)
    });
};

export const editProduct = async (product) => {
    return await fetch(`/api/products/${product.id}`, {
        method: 'POST',
        body: JSON.stringify(product)
    });
};

export const deleteProduct = async (id) => {
    return await fetch(`/api/products/${id}`, {
        method: 'DELETE'
    });
};
