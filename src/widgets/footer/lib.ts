import { Icons } from '@/shared/ui';

export const FOOTER_LINKS = [
  {
    id: 0,
    list: [
      {
        href: '/favorite',
        text: 'Избранное',
      },
      {
        href: '/cart',
        text: 'Корзина',
      },
      {
        href: '/contacts',
        text: 'Контакты',
      },
    ],
  },
  {
    id: 1,
    list: [
      {
        href: '/terms',
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
