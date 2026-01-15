import { api } from '@/shared/api/instance';

// Получить список продуктов с фильтрацией и пагинацией
export const getProducts = (params: GetProductParams = {}) =>
  api.get<GetProductsResponse>('products', { searchParams: Object.entries(params) }).json();

// Получить продукт по ID
export const getProduct = ({ id }: BaseProductParams) => api.get<Product>(`products/${id}`).json();
