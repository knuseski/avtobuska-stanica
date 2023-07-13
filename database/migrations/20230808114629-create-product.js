module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Product', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            description: {
                type: Sequelize.STRING
            },
            categoryId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Category',
                    key: 'id'
                }
            },
            price: {
                type: Sequelize.NUMERIC,
                allowNull: false
            },
            showOnMenu: {
                type: Sequelize.BOOLEAN,
                default: true
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('Product');
    }
};
