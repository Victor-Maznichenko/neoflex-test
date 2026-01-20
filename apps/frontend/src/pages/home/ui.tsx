import clsx from 'clsx';
import { useGate, useList, useUnit } from 'effector-react';
import { ProductsList } from '@/widgets';
import { model } from './model';
import { useIntersectionObserver } from '@/shared/lib/hooks';
import styles from './styles.module.scss';

interface HomePageProps {
  className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
  useGate(model.HomePageGate);
  const [loadedMore] = useUnit([model.loadedMore]);
  const { ref: bottomRef } = useIntersectionObserver<HTMLDivElement>({
    callback: ({ isIntersecting }) => (isIntersecting ? loadedMore() : undefined),
  });

  const productsList = useList(model.$productsList, ({ title, list }) => (
    <ProductsList className={styles.productsList} title={title} list={list} />
  ));

  return (
    <main className={clsx(styles.main, className)}>
      {productsList}
      <div className={styles.bottom} ref={bottomRef} />
    </main>
  );
};
