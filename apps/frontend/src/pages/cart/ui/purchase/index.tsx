import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { formatCurrency } from '@/shared/lib';
import { cartModel } from '@/entities/cart';
import { Button } from '@/shared/ui';
import styles from './styles.module.scss';

interface PurchaseProps {
  className?: string;
}

export const Purchase = ({ className }: PurchaseProps) => {
  const [totalPrice, placeOrder] = useUnit([cartModel.$totalPrice, cartModel.placeOrder]);

  return (
    <div className={clsx(styles.purchase, className)}>
      <div className={styles.purchase__top}>
        <span>ИТОГО</span>
        <span>{formatCurrency(totalPrice, { isCurrencyBefore: true })}</span>
      </div>
      <Button className={styles.purchase__button} variant='contained-black' onClick={placeOrder}>
        Перейти к оформлению
      </Button>
    </div>
  );
};
