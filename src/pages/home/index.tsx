import clsx from 'clsx';
import { ProductsList } from '@/widgets';
import { headphones, wirelessHeadphones } from '@/shared/lib';
import styles from './styles.module.scss';

interface HomePageProps {
  className?: string;
}

export const HomePage = ({ className }: HomePageProps) => (
  <main className={clsx(styles.main, className)}>
    <ProductsList className={styles.productsList} title="Наушники" list={headphones} />
    <ProductsList className={styles.productsList} title="Беспроводные наушники" list={wirelessHeadphones} />
  </main>
);
