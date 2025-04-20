import clsx from 'clsx';
import { useGate, useList } from 'effector-react';
import { ProductsList } from '@/widgets';
import { model } from './model';
import styles from './styles.module.scss';

interface HomePageProps {
  className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
  useGate(model.HomePageGate);
  const productsList = useList(model.$productsList, ({ title, list }) => (
    <ProductsList className={styles.productsList} title={title} list={list} />
  ));

  return <main className={clsx(styles.main, className)}>{productsList}</main>;
};
