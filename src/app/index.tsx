import clsx from 'clsx';
import { HomePage } from '../pages';
import { Footer } from '../widgets';
import styles from './styles.module.scss';

export const App = () => (
  <div className={clsx(styles.wrapper, 'container')}>
    <div>Header</div>
    <HomePage />
    <Footer />
  </div>
);
