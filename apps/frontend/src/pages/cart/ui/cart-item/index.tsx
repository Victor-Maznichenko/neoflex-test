import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { formatCurrency } from '@/shared/lib';
import { cartModel } from '@/entities/cart';
import { Icons } from '@/shared/ui';
import { Counter } from '../counter';
import styles from './styles.module.scss';

interface CartItemProps extends ProductCart {
  className?: string;
}

export const CartItem = ({ className, id, img, title, price, quantity, totalQuantity }: CartItemProps) => {
  const removeFromCart = useUnit(cartModel.removeFromCart);

  return (
    <div className={clsx(styles.cartItem, className)}>
      <button className={styles.cartItem__remove} type='button' onClick={() => removeFromCart(id)}>
        <Icons.Trash />
      </button>

      <div className={styles.cartItem__left}>
        <img alt='' className={styles.cartItem__img} src={img} />
        <Counter id={id} maxValue={totalQuantity} value={quantity} />
      </div>

      <div className={styles.cartItem__info}>
        <h5 className={styles.cartItem__title}>{title}</h5>
        <span className={styles.cartItem__price}>{formatCurrency(price)}</span>
      </div>

      <span className={styles.cartItem__price}>{formatCurrency(price)}</span>
    </div>
  );
};
