import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { spread } from 'patronum';

import { getProducts } from '@/shared/api/requests';

const HomePageGate = createGate();
const $productsList = createStore<ProductsList[]>([]);
const getProductsFx = createEffect(getProducts);

/* Pagination logic */
const loadedMore = createEvent();
const $totalPages = createStore(1);
const $page = createStore(1);
$page.on(loadedMore, (page) => page + 1);

sample({
  clock: [HomePageGate.open, $page],
  source: $page,
  fn: (page) => ({ page }),
  target: getProductsFx,
});

sample({
  clock: getProductsFx.doneData,
  source: $productsList,
  fn: (productsList, { products, pagination }) => ({
    products: [...productsList, ...products],
    totalPages: pagination.totalPages,
  }),
  target: spread({
    products: $productsList,
    totalPages: $totalPages,
  }),
});

export const model = {
  loadedMore,
  isLoading: getProductsFx.pending,
  HomePageGate,
  $productsList,
  getProductsFx,
};
