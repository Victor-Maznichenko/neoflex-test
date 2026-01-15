import { useList, useUnit } from 'effector-react';
import { CartItem } from '../cart-item';
import { Purchase } from '../purchase';
import { model } from '../../model';
import styles from './styles.module.scss';

export const CartPage = () => {
  const isEmpty = useUnit(model.$isEmpty);
  const cartItems = useList(model.$productsList, (productCart) => (
    <CartItem className={styles.cartItem} {...productCart} />
  ));

  return (
    <main className={styles.cart}>
      <h4 className={styles.cart__title}>Корзина</h4>
      <div className={styles.cart__content}>
        <div className={styles.cart__main}>
          <div className={styles.cart__list}>{isEmpty ? 'Список товаров пуст...' : cartItems}</div>
        </div>
        {!isEmpty && <Purchase className={styles.cart__purchase} />}
      </div>
    </main>
  );
};
