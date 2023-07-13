module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert(
            'categories',
            [
                {
                    name: 'BEERS',
                    description: 'Best summer drink',
                    order: 1,
                    active: true
                },
                {
                    name: 'WINES',
                    description: 'Best winter drink',
                    order: 2,
                    active: true
                },
                {
                    name: 'COCKTAILS',
                    description: 'Perfect for happy hour',
                    order: 3,
                    active: true
                },
                {
                    name: 'SODAS',
                    description: 'Refreshing and bubbly',
                    order: 4,
                    active: true
                },
                {
                    name: 'JUICES',
                    description: 'Freshly squeezed goodness',
                    order: 5,
                    active: true
                },
                {
                    name: 'SMOOTHIES',
                    description: 'Healthy and delicious',
                    order: 6,
                    active: true
                },
                {
                    name: 'TEAS',
                    description: 'Warm and comforting',
                    order: 7,
                    active: true
                },
                {
                    name: 'COFFEES',
                    description: 'Bold and energizing',
                    order: 8,
                    active: true
                },
                {
                    name: 'HOT CHOCOLATE',
                    description: 'Cozy and sweet',
                    order: 9,
                    active: true
                },
                {
                    name: 'LEMONADES',
                    description: 'Tart and refreshing',
                    order: 10,
                    active: true
                },
                {
                    name: 'ICED TEAS',
                    description: 'Cool and crisp',
                    order: 11,
                    active: true
                },
                {
                    name: 'MILKSHAKES',
                    description: 'Indulgent and creamy',
                    order: 12,
                    active: true
                },
                {
                    name: 'HOT CIDER',
                    description: 'Spiced and comforting',
                    order: 13,
                    active: true
                },
                {
                    name: 'WATER',
                    description: 'Pure and simple',
                    order: 14,
                    active: true
                },
                {
                    name: 'ENERGY DRINKS',
                    description: 'For when you need a boost',
                    order: 15,
                    active: true
                },
                {
                    name: 'FRUIT PUNCHES',
                    description: 'Fruity and fun',
                    order: 16,
                    active: true
                },
                {
                    name: 'MOCKTAILS',
                    description: 'Alcohol-free cocktails',
                    order: 17,
                    active: true
                },
                {
                    name: 'HOT TEAS',
                    description: 'Warm and soothing',
                    order: 18,
                    active: true
                },
                {
                    name: 'HOT COFFEES',
                    description: 'Classic and comforting',
                    order: 19,
                    active: true
                },
                {
                    name: 'ICED COFFEES',
                    description: 'Chilled and refreshing',
                    order: 20,
                    active: true
                },
                {
                    name: 'HOT TODDIES',
                    description: 'Cozy and warming',
                    order: 21,
                    active: true
                },
                {
                    name: 'MULLED WINES',
                    description: 'Spiced and festive',
                    order: 22,
                    active: true
                }
            ],
            {}
        );

        const categories = await queryInterface.sequelize.query(
            'SELECT id from categories order by `order`'
        );

        const categoryRow = categories[0];

        await queryInterface.bulkInsert(
            'products',
            [
                // Beers
                {
                    name: 'Heineken',
                    description: 'Dutch pale lager beer with 5% alcohol by volume',
                    categoryId: categoryRow[0].id,
                    price: 150,
                    active: true
                },
                {
                    name: 'Corona',
                    description: 'Mexican pale lager beer with a light and crisp taste',
                    categoryId: categoryRow[0].id,
                    price: 140,
                    active: true
                },
                {
                    name: 'Guinness',
                    description: 'Irish stout beer with a rich and creamy taste',
                    categoryId: categoryRow[0].id,
                    price: 170,
                    active: true
                },
                {
                    name: 'Stella Artois',
                    description: 'Belgian pilsner beer with a crisp and refreshing taste',
                    categoryId: categoryRow[0].id,
                    price: 160,
                    active: true
                },
                {
                    name: 'Blue Moon',
                    description: 'American wheat beer with a smooth and citrusy taste',
                    categoryId: categoryRow[0].id,
                    price: 180,
                    active: true
                },
                {
                    name: 'Hoegaarden',
                    description: 'Belgian witbier beer with a light and refreshing taste',
                    categoryId: categoryRow[0].id,
                    price: 190,
                    active: true
                },
                {
                    name: 'Budweiser',
                    description: 'American lager beer with a crisp and clean taste',
                    categoryId: categoryRow[0].id,
                    price: 130,
                    active: true
                },
                {
                    name: 'Becks',
                    description: 'German pilsner beer with a balanced and hoppy taste',
                    categoryId: categoryRow[0].id,
                    price: 150,
                    active: true
                },
                {
                    name: 'Sapporo',
                    description: 'Japanese pale lager beer with a smooth and refreshing taste',
                    categoryId: categoryRow[0].id,
                    price: 160,
                    active: true
                },
                {
                    name: 'Peroni',
                    description: 'Italian lager beer with a light and crisp taste',
                    categoryId: categoryRow[0].id,
                    price: 170,
                    active: true
                },
                {
                    name: 'Tiger Beer',
                    description: 'Singaporean pale lager beer with a clean and refreshing taste',
                    categoryId: categoryRow[0].id,
                    price: 140,
                    active: true
                },
                {
                    name: 'Chimay Blue',
                    description: 'Belgian strong dark ale beer with a complex and fruity taste',
                    categoryId: categoryRow[0].id,
                    price: 250,
                    active: true
                },
                // Wines
                {
                    name: 'Cabernet Sauvignon',
                    description: 'Full-bodied red wine with notes of blackcurrant and cedar',
                    categoryId: categoryRow[1].id,
                    price: 200,
                    active: true
                },
                {
                    name: 'Chardonnay',
                    description:
                        'Medium to full-bodied white wine with flavors of apple and vanilla',
                    categoryId: categoryRow[1].id,
                    price: 180,
                    active: true
                },
                {
                    name: 'Merlot',
                    description: 'Smooth and velvety red wine with hints of plum and chocolate',
                    categoryId: categoryRow[1].id,
                    price: 190,
                    active: true
                },
                // Cocktails
                {
                    name: 'Margarita',
                    description: 'Classic tequila-based cocktail with lime and salt',
                    categoryId: categoryRow[2].id,
                    price: 180,
                    active: true
                },
                {
                    name: 'Martini',
                    description: 'Elegant cocktail made with gin or vodka and vermouth',
                    categoryId: categoryRow[2].id,
                    price: 200,
                    active: true
                },
                {
                    name: 'Mojito',
                    description: 'Refreshing cocktail with rum, lime, mint, and soda water',
                    categoryId: categoryRow[2].id,
                    price: 190,
                    active: true
                },
                // Sodas
                {
                    name: 'Coca-Cola',
                    description: 'Classic carbonated soft drink with a sweet and fizzy taste',
                    categoryId: categoryRow[3].id,
                    price: 100,
                    active: true
                },
                {
                    name: 'Sprite',
                    description: 'Lemon-lime flavored carbonated soft drink',
                    categoryId: categoryRow[3].id,
                    price: 100,
                    active: true
                },
                {
                    name: 'Fanta',
                    description:
                        'Fruit-flavored carbonated soft drink with a bold and vibrant taste',
                    categoryId: categoryRow[3].id,
                    price: 100,
                    active: true
                },
                // Juices
                {
                    name: 'Orange Juice',
                    description: 'Freshly squeezed orange juice with a tangy and refreshing flavor',
                    categoryId: categoryRow[4].id,
                    price: 120,
                    active: true
                },
                {
                    name: 'Apple Juice',
                    description: 'Naturally sweet apple juice made from ripe apples',
                    categoryId: categoryRow[4].id,
                    price: 120,
                    active: true
                },
                {
                    name: 'Pineapple Juice',
                    description: 'Tropical juice with a tropical and sweet taste',
                    categoryId: categoryRow[4].id,
                    price: 120,
                    active: true
                },
                // Smoothies
                {
                    name: 'Strawberry Banana Smoothie',
                    description: 'Creamy blend of fresh strawberries and ripe bananas',
                    categoryId: categoryRow[5].id,
                    price: 150,
                    active: true
                },
                {
                    name: 'Mango Pineapple Smoothie',
                    description: 'Tropical blend of juicy mangoes and sweet pineapples',
                    categoryId: categoryRow[5].id,
                    price: 150,
                    active: true
                },
                {
                    name: 'Blueberry Spinach Smoothie',
                    description:
                        'Healthy combination of antioxidant-rich blueberries and nutrient-packed spinach',
                    categoryId: categoryRow[5].id,
                    price: 150,
                    active: true
                },
                // Teas
                {
                    name: 'Green Tea',
                    description: 'Light and refreshing tea with a delicate flavor',
                    categoryId: categoryRow[6].id,
                    price: 90,
                    active: true
                },
                {
                    name: 'Earl Grey Tea',
                    description: 'Black tea infused with bergamot for a citrusy aroma',
                    categoryId: categoryRow[6].id,
                    price: 90,
                    active: true
                },
                {
                    name: 'Chamomile Tea',
                    description: 'Herbal tea known for its calming properties and floral taste',
                    categoryId: categoryRow[6].id,
                    price: 90,
                    active: true
                },
                // Coffees
                {
                    name: 'Espresso',
                    description: 'Strong and concentrated coffee with a rich flavor',
                    categoryId: categoryRow[7].id,
                    price: 120,
                    active: true
                },
                {
                    name: 'Cappuccino',
                    description: 'Espresso topped with frothy milk and a sprinkle of cocoa',
                    categoryId: categoryRow[7].id,
                    price: 140,
                    active: true
                },
                {
                    name: 'Latte',
                    description: 'Creamy coffee with steamed milk and a hint of sweetness',
                    categoryId: categoryRow[7].id,
                    price: 140,
                    active: true
                },
                // Hot Chocolate
                {
                    name: 'Classic Hot Chocolate',
                    description: 'Rich and velvety chocolate drink topped with whipped cream',
                    categoryId: categoryRow[8].id,
                    price: 130,
                    active: true
                },
                {
                    name: 'Salted Caramel Hot Chocolate',
                    description: 'Decadent hot chocolate with a hint of salted caramel',
                    categoryId: categoryRow[8].id,
                    price: 150,
                    active: true
                },
                {
                    name: 'Peppermint Hot Chocolate',
                    description: 'Refreshing hot chocolate infused with peppermint flavor',
                    categoryId: categoryRow[8].id,
                    price: 150,
                    active: true
                },
                // Lemonades
                {
                    name: 'Classic Lemonade',
                    description: 'Tart and tangy lemonade made with freshly squeezed lemons',
                    categoryId: categoryRow[9].id,
                    price: 110,
                    active: true
                },
                {
                    name: 'Strawberry Lemonade',
                    description: 'Sweet and fruity lemonade with a burst of strawberry flavor',
                    categoryId: categoryRow[9].id,
                    price: 120,
                    active: true
                },
                {
                    name: 'Watermelon Lemonade',
                    description: 'Refreshing lemonade infused with juicy watermelon',
                    categoryId: categoryRow[9].id,
                    price: 120,
                    active: true
                },
                // Iced Teas
                {
                    name: 'Sweet Iced Tea',
                    description: 'Southern-style iced tea with a touch of sweetness',
                    categoryId: categoryRow[10].id,
                    price: 100,
                    active: true
                },
                {
                    name: 'Peach Iced Tea',
                    description: 'Iced tea flavored with ripe peaches for a fruity twist',
                    categoryId: categoryRow[10].id,
                    price: 110,
                    active: true
                },
                {
                    name: 'Mint Lemon Iced Tea',
                    description: 'Iced tea infused with refreshing mint and zesty lemon',
                    categoryId: categoryRow[10].id,
                    price: 110,
                    active: true
                },
                // Milkshakes
                {
                    name: 'Chocolate Milkshake',
                    description: 'Indulgent milkshake made with rich chocolate ice cream',
                    categoryId: categoryRow[11].id,
                    price: 160,
                    active: true
                },
                {
                    name: 'Vanilla Milkshake',
                    description: 'Classic milkshake with creamy vanilla ice cream',
                    categoryId: categoryRow[11].id,
                    price: 160,
                    active: true
                },
                {
                    name: 'Strawberry Milkshake',
                    description: 'Sweet and fruity milkshake made with ripe strawberries',
                    categoryId: categoryRow[11].id,
                    price: 160,
                    active: true
                },
                // Hot Cider
                {
                    name: 'Spiced Apple Cider',
                    description: 'Warm and comforting apple cider infused with aromatic spices',
                    categoryId: categoryRow[12].id,
                    price: 130,
                    active: true
                },
                {
                    name: 'Caramel Apple Cider',
                    description: 'Rich apple cider with a drizzle of sweet caramel',
                    categoryId: categoryRow[12].id,
                    price: 150,
                    active: true
                },
                {
                    name: 'Mulled Cider',
                    description: 'Traditional cider simmered with spices for a cozy winter drink',
                    categoryId: categoryRow[12].id,
                    price: 150,
                    active: true
                },
                // Water
                {
                    name: 'Still Water',
                    description: 'Pure and refreshing still water',
                    categoryId: categoryRow[13].id,
                    price: 80,
                    active: true
                },
                {
                    name: 'Sparkling Water',
                    description: 'Bubbly and effervescent sparkling water',
                    categoryId: categoryRow[13].id,
                    price: 80,
                    active: true
                },
                {
                    name: 'Flavored Water',
                    description: 'Water infused with natural flavors for a hint of taste',
                    categoryId: categoryRow[13].id,
                    price: 90,
                    active: true
                }
            ],
            {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('products', null, {});
        await queryInterface.bulkDelete('categories', null, {});
    }
};
