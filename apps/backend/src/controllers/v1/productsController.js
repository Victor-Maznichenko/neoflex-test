const dataStore = require('../../models/v1/data');

const getProducts = (req, res) => {
  try {
    const {
      page = 1,
      limit = 2,
      categoryId,
      minPrice,
      maxPrice,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query;

    let filteredProducts = [...dataStore.products];

    // if (categoryId) {
    //   filteredProducts = filteredProducts.filter(p => p.categoryId === parseInt(categoryId));
    // }

    // if (minPrice) {
    //   filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(minPrice));
    // }

    // if (maxPrice) {
    //   filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(maxPrice));
    // }

    // if (search) {
    //   const searchLower = search.toLowerCase();
    //   filteredProducts = filteredProducts.filter(p => 
    //     p.title.toLowerCase().includes(searchLower) ||
    //     p.description.toLowerCase().includes(searchLower)
    //   );
    // }

    // filteredProducts.sort((a, b) => {
    //   let aValue, bValue;
      
    //   switch (sortBy) {
    //     case 'price':
    //       aValue = a.price;
    //       bValue = b.price;
    //       break;
    //     case 'createdAt':
    //     default:
    //       aValue = new Date(a.createdAt);
    //       bValue = new Date(b.createdAt);
    //       break;
    //   }
      
    //   if (sortOrder === 'asc') {
    //     return aValue > bValue ? 1 : -1;
    //   } else {
    //     return aValue < bValue ? 1 : -1;
    //   }
    // });

    const total = filteredProducts.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    res.json({
      products: paginatedProducts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        itemsPerPage: parseInt(limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Ошибка при получении продуктов',
      message: error.message
    });
  }
};

const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const productId = parseInt(id);
    const product = dataStore.products.find(p => p.id === productId);
    
    if (!product) {
      return res.status(404).json({
        error: 'Продукт не найден',
        id: productId
      });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({
      error: 'Ошибка при получении продукта',
      message: error.message
    });
  }
};


module.exports = {
  getProducts,
  getProductById,
};
