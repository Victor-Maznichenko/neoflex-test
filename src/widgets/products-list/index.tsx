import clsx from 'clsx';
import { ProductCard } from '../product-card';
import styles from './styles.module.scss';

interface ProductsListProps {
  title: string;
  list: Product[];
  className?: string;
}

export const ProductsList = ({ title, list, className }: ProductsListProps) => (
  <section className={clsx(styles.products, className)}>
    <h4 className={styles.title}>{title}</h4>
    <div className={styles.products__list}>
      {list.map((productProps) => (
        <ProductCard {...productProps} className={styles.productCard} key={productProps.id} />
      ))}
    </div>
  </section>
);
