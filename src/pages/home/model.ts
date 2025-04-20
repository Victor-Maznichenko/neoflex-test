import { createEffect, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { getProducts } from '@/shared/api/requests';

const HomePageGate = createGate();
const $productsList = createStore<ProductsList[]>([]);
const getProductsFx = createEffect(getProducts);

sample({
  clock: HomePageGate.open,
  target: getProductsFx,
});

sample({
  clock: getProductsFx.doneData,
  fn: ({ products }) => products,
  target: $productsList,
});
// TODO: isLoading + Skeleton, Error handler

export const model = {
  HomePageGate,
  $productsList,
  getProductsFx,
};
