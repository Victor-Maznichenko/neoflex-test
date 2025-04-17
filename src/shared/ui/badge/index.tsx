import clsx from 'clsx';
import type { ComponentProps, ElementType } from 'react';
import styles from './styles.module.scss';

interface BadgePropsOwnProps<E extends ElementType = ElementType> {
  as?: E;
  count?: number;
}

export type BadgeProps<E extends ElementType> = BadgePropsOwnProps<E> &
  Omit<ComponentProps<E>, keyof BadgePropsOwnProps>;

const MAX_NUM = 99;
export const Badge = <T extends ElementType = 'div'>({
  as,
  className,
  count = 0,
  children,
  ...props
}: BadgeProps<T>) => {
  const Component = as ?? 'div';

  return (
    <Component {...props} className={clsx(styles.badge, className)}>
      <div className={styles.badge__content}>{children}</div>
      <sup className={styles.badge__count}>{count < MAX_NUM - 1 ? count : MAX_NUM}</sup>
    </Component>
  );
};
