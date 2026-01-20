const dataStore = require('../../models/v1/data');

const getProducts = (req, res) => {
  try {
    const {
      page = 1,
      limit = 2,
      // search,
    } = req.query;

    const filteredProducts = [...dataStore.products];

    // if (search) {
    //   const searchLower = search.toLowerCase();
    //   filteredProducts = filteredProducts.filter(p => 
    //     p.title.toLowerCase().includes(searchLower) ||
    //     p.description.toLowerCase().includes(searchLower)
    //   );
    // }

    const total = filteredProducts.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + Number.parseInt(limit);
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    res.json({
      products: paginatedProducts,
      pagination: {
        currentPage: Number.parseInt(page),
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        itemsPerPage: Number.parseInt(limit)
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
    const productId = Number.parseInt(id);
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
