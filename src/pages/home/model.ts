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

/* 
  TODO:
  1. Реализовать индикатор загрузки (isLoading) и skeleton‑компоненты во время запроса.
  2. Добавить обработку ошибок: ловить ошибки в getProductsFx.failData,
      показывать пользователю понятное сообщение об ошибке. 
*/

export const model = {
  HomePageGate,
  $productsList,
  getProductsFx,
};
