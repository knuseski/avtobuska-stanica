import { DataTypes, Model } from 'sequelize';
import connection from '../connection';

const initProduct = (sequelize, Types) => {
    class Product extends Model {}

    Product.init(
        {
            name: Types.STRING,
            description: Types.STRING,
            price: Types.NUMBER,
            categoryId: Types.INTEGER,
            active: Types.BOOLEAN
        },
        {
            sequelize,
            modelName: 'Product',
            tableName: 'products',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    );

    return Product;
};

export default initProduct(connection, DataTypes);
