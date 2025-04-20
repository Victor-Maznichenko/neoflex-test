import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/lib';
import styles from './styles.module.scss';

export const Logo = () => (
  <Link className={styles.logo} to={ROUTES.Home}>
    QPICK
  </Link>
);
