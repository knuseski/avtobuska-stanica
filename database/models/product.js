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
            showOnMenu: Types.BOOLEAN
        },
        {
            sequelize,
            modelName: 'Product',
            tableName: 'Product',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    );

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            as: 'category'
        });
    };

    return Product;
};

export default initProduct(connection, DataTypes);
