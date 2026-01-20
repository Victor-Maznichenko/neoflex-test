import clsx from 'clsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, CartPage, NotFoundPage } from '@/pages';
import { Footer, Header } from '@/widgets';
import { Notifications } from '@/features';
import { ROUTES, ThemeProvider } from '@/shared/lib';
import styles from './styles.module.scss';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <div className={clsx(styles.wrapper, 'container')}>
        <Header />
        <Routes>
          <Route path={ROUTES.Home} element={<HomePage />} />
          <Route path={ROUTES.Cart} element={<CartPage />} />
          <Route path={ROUTES.NotFound} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
      <Notifications />
    </ThemeProvider>
  </BrowserRouter>
);
