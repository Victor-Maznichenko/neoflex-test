import clsx from 'clsx';

import { ProductCard } from '../product-card';

import styles from './styles.module.scss';

interface ProductsListProps {
  className?: string;
  list: Product[];
  title: string;
}

export const ProductsList = ({ title, list, className }: ProductsListProps) => (
  <section className={clsx(styles.products, className)}>
    <h4 className={styles.title}>{title}</h4>
    <div className={styles.products__list}>
      {list.map((productProps) => (
        <ProductCard {...productProps} key={productProps.id} className={styles.productCard} />
      ))}
    </div>
  </section>
);
