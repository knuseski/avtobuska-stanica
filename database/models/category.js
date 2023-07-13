import { DataTypes, Model } from 'sequelize';
import connection from '../connection';

const initCategory = (sequelize, Types) => {
    class Category extends Model {}

    Category.init(
        {
            name: Types.STRING,
            description: Types.STRING,
            order: Types.NUMBER,
            showOnMenu: Types.BOOLEAN,
            image: Types.STRING
        },
        {
            sequelize,
            modelName: 'Category',
            tableName: 'Category',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    );

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            foreignKey: 'categoryId',
            as: 'products'
        });
    };

    return Category;
};

export default initCategory(connection, DataTypes);
