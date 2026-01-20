import clsx from 'clsx';
import { useGate, useList, useUnit } from 'effector-react';

import { useIntersectionObserver } from '@/shared/lib/hooks';
import { Spinner } from '@/shared/ui';
import { ProductsList } from '@/widgets';

import { model } from './model';

import styles from './styles.module.scss';

interface HomePageProps {
  className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
  useGate(model.HomePageGate);
  const [loadedMore, isLoading, isComplete] = useUnit([model.loadedMore, model.isLoading, model.isComplete]);
  const { ref: bottomRef } = useIntersectionObserver<HTMLDivElement>({
    callback: ({ isIntersecting }) => (isIntersecting ? loadedMore() : undefined),
  });

  const productsList = useList(model.$productsList, ({ title, list }) => (
    <ProductsList className={styles.productsList} list={list} title={title} />
  ));

  return (
    <main className={clsx(styles.main, className)}>
      {productsList}
      <div className={styles.spinnerWrapper}>
        {isLoading && <Spinner />}
        {isComplete && 'Все товары были загружены :)'}
      </div>
      <div ref={bottomRef} className={styles.bottom} />
    </main>
  );
};
