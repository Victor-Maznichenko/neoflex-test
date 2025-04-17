import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ROUTES } from '../../lib';

export const Logo = () => (
  <Link className={styles.logo} to={ROUTES.Home}>
    QPICK
  </Link>
);
