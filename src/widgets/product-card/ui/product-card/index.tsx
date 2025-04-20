import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { Button, Icons } from '@/shared/ui';
import { formatCurrency } from '@/shared/lib';
import { model } from '../../model';
import styles from './styles.module.scss';

interface ProductCardProps extends Product {
  className?: string;
}

export const ProductCard = ({ className, ...product }: ProductCardProps) => {
  const addToCart = useUnit(model.addToCart);
  const { img, title, price, rate } = product;

  return (
    <div className={clsx(styles.productCard, className)}>
      <div className={styles.productCard__imgWrap}>
        <img src={img} alt="" />
      </div>
      <div className={styles.productCard__infoTop}>
        <h5 className={styles.productCard__title}>{title}</h5>
        <div className={styles.productCard__price}>{formatCurrency(price)}</div>
      </div>
      <div className={styles.productCard__infoBottom}>
        <div>
          <Icons.Star />
          <span>{rate}</span>
        </div>
        <Button variant="text" onClick={() => addToCart(product)}>
          Купить
        </Button>
      </div>
    </div>
  );
};
