# Интернет-магазин аудио аксессуаров
Имеется 2 основные страницы: каталог товаров и корзина.

## Запуск
Поставить версию node `v20.19.0` или выше. 

```bash
# 1. Клонировать репозиторий
git clone https://github.com/Victor-Maznichenko/neoflex-test.git

# 2. Скачать зависимости
cd ./neoflex-test
yarn

# Запустить dev-сервер
yarn run dev
```

## Доступные команды

<p>В этом проекте вы можете пользоваться следующими скриптами:</p>

| Скрипт   | Описание                                                    |
| -------- | ----------------------------------------------------------- |
| dev      | Запускает приложение в режиме разработки.                   |
| build    | Собирает frontend приложение для production в папку `dist`. |
| lint     | Запускает ESLint для проверки кода на ошибки.               |
| lint:fix | Запускает ESLint для проверки кода и исправления ошибок     |

## Технологический стек
- TypeScript 5.9 – Типизация
- React 19.2 – UI библиотека
- Effector + Patronum – управление состоянием 
- React Router 6 – Маршрутизация (лучше использовать Atomic Router для Effector, однако этот роутер указан по ТЗ)
- Ky – HTTP клиент
- clsx – Удобное управление классами
- Express.js – Веб-фреймворк для серверов
- ESLint – Проверка кода
- Husky – Для пре-коммит хуков в приложении.

## Структура `apps/frontend` проекта:
```
frontend/
├── @types/
├── node_modules/
├── public/
└── src/
    ├── app/
    │   ├── styles.module.scss
    │   └── index.tsx
    ├── features/
    │   ├── notification/
    │   │   ├── styles.module.scss
    │   │   ├── lib.ts
    │   │   ├── ui.tsx
    │   │   └── index.ts
    │   └── index.ts
    ├── pages/
    │   ├── cart/
    │   │   ├── ui/
    │   │   ├── index.ts
    │   │   └── models.ts
    │   ├── home/
    │   │   ├── styles.module.scss
    │   │   ├── ui.tsx
    │   │   ├── model.ts
    │   │   └── index.ts
    │   └── not-found/
    │       └── index.tsx
    │
    ├── shared/
    │   ├── api/
    │   │   ├── requests/
    │   │   ├── index.ts
    │   │   └── instance.ts
    │   ├── assets/
    │   │   ├── images/
    │   │   └── styles/
    │   ├── lib/
    │   │   ├── constants/
    │   │   ├── contexts/
    │   │   ├── hooks/
    │   │   ├── utils/
    │   │   └── index.ts
    │   └── ui/
    │       ├── condition/
    │       ├── footer/
    │       ├── header/
    │       ├── icons/
    │       ├── theme-switcher/
    │       └── index.ts
    │
    │── widgets/
    │   ├── footer/
    │   ├── header/
    │   ├── product-card/
    │   ├── product-list/
    │   └── index.ts
    │
    └── main.tsx
```

## Более подробный README для [backend](./apps/backend/README.md)


## Контакты

При возникновении вопросов: [@victor_maznichenko](https://t.me/victor_maznichenko)
