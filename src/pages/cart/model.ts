import { reshape } from 'patronum';
import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';
import { productCardModel } from '@/widgets';
import { notificationModel } from '@/features';
import { NotificationType } from '@/shared/lib';

const $productsList = createStore<ProductCart[]>([]);
const { $isEmpty } = reshape({
  source: $productsList,
  shape: {
    $isEmpty: (array) => !array.length,
  },
});
persist({ store: $productsList, key: 'cartList' });

const { $cartItemsCount } = reshape({
  source: $productsList,
  shape: {
    $cartItemsCount: ({ length }) => length,
  },
});

const $totalPrice = $productsList.map((items) => items.reduce((sum, item) => sum + item.price * item.quantity, 0));

const productAdded = createEvent();
const placeOrder = createEvent();
// eslint-disable-next-line no-alert
placeOrder.watch(() => alert('Покупка!'));

/* 
  ===============
  Cart Actions
  ==================
*/
const increment = createEvent<number>();
const decrement = createEvent<number>();
const removeFromCart = createEvent<number>();

// Increment
sample({
  clock: increment,
  source: $productsList,
  fn: (products, id) => products.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)),
  target: $productsList,
});

// Decrement
sample({
  clock: decrement,
  source: $productsList,
  fn: (products, id) => {
    const item = products.find((p) => p.id === id);
    if (!item) return products;

    if (item.quantity > 1) {
      return products.map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p));
    }

    return products.filter((p) => p.id !== id);
  },
  target: $productsList,
});

// Add item
sample({
  clock: productCardModel.addToCart,
  source: $productsList,
  filter: (products, addedProduct) => products.every(({ id }) => id !== addedProduct.id),
  fn: (productsList, addedProduct) => [
    ...productsList,
    {
      ...addedProduct,
      quantity: 1,
      totalQuantity: 10,
    },
  ],
  target: [$productsList, productAdded],
});

sample({
  clock: productCardModel.addToCart,
  source: $productsList,
  filter: (products, addedProduct) => !products.every(({ id }) => id !== addedProduct.id),
  fn: () => ({
    message: 'Товар уже есть в корзине!',
    type: NotificationType.Fail,
  }),
  target: notificationModel.show,
});

sample({
  clock: productAdded,
  fn: () => ({
    message: 'Корзина успешно обновленна!',
    type: NotificationType.Success,
  }),
  target: notificationModel.show,
});

// Remove item
sample({
  clock: removeFromCart,
  source: $productsList,
  fn: (products, id) => products.filter((p) => p.id !== id),
  target: $productsList,
});

export const model = {
  $isEmpty,
  $totalPrice,
  $productsList,
  $cartItemsCount,
  increment,
  decrement,
  removeFromCart,
  placeOrder,
};
