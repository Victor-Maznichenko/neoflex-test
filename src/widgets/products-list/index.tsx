import clsx from 'clsx';
import { memo } from 'react';
import { ProductsCard } from '../product-card';
import styles from './styles.module.scss';

interface ProductsListProps {
  title: string;
  list: Product[];
  className?: string;
}

// TODO: Проверить использование memo
export const ProductsList = memo(({ title, list, className }: ProductsListProps) => (
  <section className={clsx(styles.products, className)}>
    <h4 className={styles.title}>{title}</h4>
    <div className={styles.products__list}>
      {list.map((productProps) => (
        <ProductsCard {...productProps} className={styles.productCard} key={productProps.id} />
      ))}
    </div>
  </section>
));
