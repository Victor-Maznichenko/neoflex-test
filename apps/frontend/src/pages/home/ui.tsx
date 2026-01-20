import clsx from 'clsx';
import { useGate, useList, useUnit } from 'effector-react';

import { useIntersectionObserver } from '@/shared/lib/hooks';
import { ProductsList } from '@/widgets';

import { model } from './model';

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
    <ProductsList className={styles.productsList} list={list} title={title} />
  ));

  return (
    <main className={clsx(styles.main, className)}>
      {productsList}
      <div ref={bottomRef} className={styles.bottom} />
    </main>
  );
};
