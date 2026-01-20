import clsx from 'clsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Notifications } from '@/features';
import { CartPage, HomePage, NotFoundPage } from '@/pages';
import { ROUTES, ThemeProvider } from '@/shared/lib';
import { Footer, Header } from '@/widgets';

import styles from './styles.module.scss';

export const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <div className={clsx(styles.wrapper, 'container')}>
        <Header />
        <Routes>
          <Route element={<HomePage />} path={ROUTES.Home} />
          <Route element={<CartPage />} path={ROUTES.Cart} />
          <Route element={<NotFoundPage />} path={ROUTES.NotFound} />
        </Routes>
        <Footer />
      </div>
      <Notifications />
    </ThemeProvider>
  </BrowserRouter>
);
