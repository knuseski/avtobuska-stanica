import Category from './category';
import Product from './product';

Category.hasMany(Product, {
    as: 'products'
});
Product.belongsTo(Category, {
    as: 'category'
});

export { Category, Product };
