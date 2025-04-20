import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useUnit } from 'effector-react';
import { Icons, Badge, Logo } from '@/shared/ui';
import { ROUTES } from '@/shared/lib';
import { cartModel } from '@/pages';
import styles from './styles.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const cartItemsCount = useUnit(cartModel.$cartItemsCount);

  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.header__inner}>
        <div className={styles.header__start}>
          <Logo />
        </div>
        <div className={styles.header__end}>
          <Badge className={styles.header__badge} as={Link} to={ROUTES.NotFound} count={0}>
            <Icons.Heart />
          </Badge>
          <Badge className={styles.header__badge} as={Link} to={ROUTES.Cart} count={cartItemsCount}>
            <Icons.Cart />
          </Badge>
        </div>
      </div>
    </header>
  );
};
