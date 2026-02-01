import clsx from 'clsx';
import { useUnit } from 'effector-react';

import { model } from '@/entities/cart/model';
import { formatCurrency } from '@/shared/lib';
import { Button, Icons } from '@/shared/ui';

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
        <img alt="" className={styles.productCard__img} src={img} />
      </div>
      <div className={styles.productCard__infoTop}>
        <h5 className={styles.productCard__title}>{title}</h5>
        <div className={styles.productCard__price}>{formatCurrency(price, { useGrouping: false })}</div>
      </div>
      <div className={styles.productCard__infoBottom}>
        <div className={styles.productCard__rate}>
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
