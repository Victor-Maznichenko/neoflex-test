import clsx from 'clsx';
import { HomePage } from '@/pages';
import { Footer, Header } from '@/widgets';
import styles from './styles.module.scss';

export const App = () => (
  <div className={clsx(styles.wrapper, 'container')}>
    <Header />
    <HomePage />
    <Footer />
  </div>
);
