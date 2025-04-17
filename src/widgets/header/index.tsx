import clsx from 'clsx';
import { Icons, Badge, Logo } from '@/shared/ui';
import styles from './styles.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => (
  <header className={clsx(styles.header, className)}>
    <div className={styles.header__inner}>
      <div className={styles.header__start}>
        <Logo />
      </div>
      <div className={styles.header__end}>
        <Badge className={styles.header__badge} as="a" href="/favorites" count={1}>
          <Icons.Heart />
        </Badge>
        <Badge className={styles.header__badge} as="a" href="/cart" count={1}>
          <Icons.Cart />
        </Badge>
      </div>
    </div>
  </header>
);
