import { Icons } from '@/shared/ui';
import { ROUTES } from '@/shared/lib';

export const FOOTER_LINKS = [
  {
    id: 0,
    list: [
      {
        path: ROUTES.NotFound,
        text: 'Избранное',
      },
      {
        path: ROUTES.Cart,
        text: 'Корзина',
      },
      {
        path: ROUTES.NotFound,
        text: 'Контакты',
      },
    ],
  },
  {
    id: 1,
    list: [
      {
        path: ROUTES.NotFound,
        text: 'Условия сервиса',
      },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    href: 'https://vk.com/victor_maznichenko',
    Component: Icons.VK,
    ariaLabel: 'VK',
  },
  {
    href: 'https://t.me/victor_maznichenko',
    Component: Icons.Telegram,
    ariaLabel: 'Telegram',
  },
  {
    href: 'tel:79204574579',
    Component: Icons.Phone,
    ariaLabel: 'Phone',
  },
];
