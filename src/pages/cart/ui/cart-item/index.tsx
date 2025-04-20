import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { model } from '../../model';
import { formatCurrency } from '@/shared/lib';
import { Icons } from '@/shared/ui';
import { Counter } from '../counter';
import styles from './styles.module.scss';

interface CartItemProps extends ProductCart {
  className?: string;
}

export const CartItem = ({ className, id, img, title, price, quantity, totalQuantity }: CartItemProps) => {
  const removeFromCart = useUnit(model.removeFromCart);

  return (
    <div className={clsx(styles.cartItem, className)}>
      <button className={styles.cartItem__remove} onClick={() => removeFromCart(id)} type="button">
        <Icons.Trash />
      </button>

      <div className={styles.cartItem__left}>
        <img className={styles.cartItem__img} src={img} alt="" />
        <Counter id={id} value={quantity} maxValue={totalQuantity} />
      </div>

      <div className={styles.cartItem__info}>
        <h5 className={styles.cartItem__title}>{title}</h5>
        <span className={styles.cartItem__price}>{formatCurrency(price)}</span>
      </div>

      <span className={styles.cartItem__price}>{formatCurrency(price)}</span>
    </div>
  );
};
