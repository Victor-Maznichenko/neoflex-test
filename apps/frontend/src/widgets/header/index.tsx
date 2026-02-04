import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/lib';
import { cartModel } from '@/entities/cart';
import { Badge, Icons, Logo, ThemeSwitcher } from '@/shared/ui';
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
          <ThemeSwitcher />
          <Badge as={Link} className={styles.header__badge} count={cartItemsCount} to={ROUTES.Cart}>
            <Icons.Cart />
          </Badge>
        </div>
      </div>
    </header>
  );
};
