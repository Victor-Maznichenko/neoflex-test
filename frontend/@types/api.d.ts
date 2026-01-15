interface Product {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
}

interface ProductCart extends Product {
  quantity: number;
  totalQuantity: number;
}

interface ProductsList {
  id: number;
  title: string;
  list: Product[];
}

interface ProductsResponse {
  products: ProductsList[];
}

interface BaseProductParams {
  id: number | string;
}

interface GetProductParams {
  categoryId?: number | string;
  limit?: number;
  maxPrice?: number;
  minPrice?: number;
  page?: number;
  search?: string;
  sortOrder?: 'asc' | 'desc';
  sortBy?: 'createdAt' | 'price' | 'priority';
}

interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

interface GetProductsResponse {
  products: ProductsList[];
  pagination: Pagination;
}
