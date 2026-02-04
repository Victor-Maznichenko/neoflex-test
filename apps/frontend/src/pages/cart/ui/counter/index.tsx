import { useUnit } from 'effector-react';
import { cartModel } from '@/entities/cart';
import { Button } from '@/shared/ui';
import styles from './styles.module.scss';

interface CounterProps {
  id: number;
  maxValue: number;
  value: number;
}

export const Counter = ({ id, value, maxValue }: CounterProps) => {
  const [increment, decrement] = useUnit([cartModel.increment, cartModel.decrement]);

  return (
    <div className={styles.counter}>
      <Button className={styles.minusBtn} disabled={value <= 1} onClick={() => decrement(id)} />
      <span>{value}</span>
      <Button className={styles.plusBtn} disabled={value >= maxValue} onClick={() => increment(id)} />
    </div>
  );
};
