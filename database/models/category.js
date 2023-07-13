import { DataTypes, Model } from 'sequelize';
import connection from '../connection';

const initCategory = (sequelize, Types) => {
    class Category extends Model {}

    Category.init(
        {
            name: Types.STRING,
            description: Types.STRING,
            order: Types.NUMBER,
            active: Types.BOOLEAN,
            image: Types.STRING
        },
        {
            sequelize,
            modelName: 'Category',
            tableName: 'categories',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    );

    return Category;
};

export default initCategory(connection, DataTypes);
