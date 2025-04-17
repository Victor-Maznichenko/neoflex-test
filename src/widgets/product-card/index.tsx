import clsx from 'clsx';
import { Button, Icons } from '@/shared/ui';
import styles from './styles.module.scss';

interface ProductsCardProps extends Product {
  className?: string;
}

export const ProductsCard = ({ className, img, title, price, rate }: ProductsCardProps) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div className={clsx(styles.productCard, className)}>
      <div className={styles.productCard__imgWrap}>
        <img src={img} alt="" />
      </div>
      <div className={styles.productCard__infoTop}>
        <h5 className={styles.productCard__title}>{title}</h5>
        <div className={styles.productCard__price}>{formattedPrice}</div>
      </div>
      <div className={styles.productCard__infoBottom}>
        <div>
          <Icons.Star />
          <span>{rate}</span>
        </div>
        <Button variant="text">Купить</Button>
      </div>
    </div>
  );
};
