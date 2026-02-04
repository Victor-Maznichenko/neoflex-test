const process = require("node:process");

const generateMockProducts = () => {
   const PORT = process.env.PORT || 3001;
   const baseURL = process.env.BASE_URL || `http://localhost:${PORT}`;

   const categories = [
      "In-Ear",
      "On-Ear",
      "Over-Ear",
      "Wireless",
      "True Wireless",
      "Wired",
      "Noise-Cancelling",
      "Sports",
      "Gaming",
      "Studio",
      "Open-Back",
      "Closed-Back",
   ];
   const products = [];

   categories.forEach((category, categoryId) => {
      const categoryProducts = [];
      const count = Math.floor(Math.random() * 4) + 3;

      for (let i = 1; i <= count; i++) {
         const daysAgo = Math.floor(Math.random() * 60);
         const createdAt = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);

         const product = {
            id: i,
            title: `Headphones ${category} ${i}`,
            description: `Подробное описание товара Headphones ${category}. Это отличный товар, который подходит для различных целей. Качество проверено временем и имеет гарантию.`,
            price: Math.floor(Math.random() * 10000) + 1000,
            category,
            categoryId,
            createdAt: createdAt.toISOString(),
            updatedAt: createdAt.toISOString(),
            rate: (Math.random() * 5).toFixed(1),
            total: Math.floor(Math.random() * 50) + 1,
            img: `${baseURL}/assets/${(i % 6) + 1}.webp`,
            characteristics: {
               Гарантия: ["Есть", "Нет", "Частичная"][Math.floor(Math.random() * 3)],
               Производитель: `Бренд ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
               Модель: `Модель ${Math.floor(Math.random() * 1000)}`,
               Цвет: ["Черный", "Белый", "Серый", "Синий", "Красный", "Зеленый"][
                  Math.floor(Math.random() * 6)
               ],
            },
         };

         categoryProducts.push(product);
      }

      products.push({
         id: categoryId,
         title: category,
         list: categoryProducts
      })
   });

   return products;
};

const productsData = generateMockProducts();

const dataStore = {
   products: productsData,
};

module.exports = dataStore;
