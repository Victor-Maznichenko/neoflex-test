import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { Button } from '@/shared/ui';
import { formatCurrency } from '@/shared/lib';
import { model } from '../../model';
import styles from './styles.module.scss';

interface PurchaseProps {
  className?: string;
}

export const Purchase = ({ className }: PurchaseProps) => {
  const [totalPrice, placeOrder] = useUnit([model.$totalPrice, model.placeOrder]);

  return (
    <div className={clsx(styles.purchase, className)}>
      <div className={styles.purchase__top}>
        <span>ИТОГО</span>
        <span>{formatCurrency(totalPrice, true)}</span>
      </div>
      <Button className={styles.purchase__button} variant="contained-black" onClick={placeOrder}>
        Перейти к оформлению
      </Button>
    </div>
  );
};
