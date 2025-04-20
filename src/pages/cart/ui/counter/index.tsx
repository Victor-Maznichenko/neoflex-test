import { useUnit } from 'effector-react';
import { model } from '../../model';
import { Button } from '@/shared/ui';
import styles from './styles.module.scss';

interface CounterProps {
  id: number;
  value: number;
  maxValue: number;
}

export const Counter = ({ id, value, maxValue }: CounterProps) => {
  const [increment, decrement] = useUnit([model.increment, model.decrement]);

  return (
    <div className={styles.counter}>
      <Button className={styles.minusBtn} onClick={() => decrement(id)} disabled={value <= 1} />
      <span>{value}</span>
      <Button className={styles.plusBtn} onClick={() => increment(id)} disabled={value >= maxValue} />
    </div>
  );
};
