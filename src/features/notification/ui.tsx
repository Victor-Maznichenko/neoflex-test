import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { useUnit } from 'effector-react';
import { NotificationIcons, notificationRoot } from './lib';
import { model } from './model';
import styles from './styles.module.scss';

export const Notification = () => {
  const [isOpen, data] = useUnit([model.$isOpen, model.$data]);

  if (!notificationRoot) {
    // eslint-disable-next-line no-console
    console.error('Notification root not found');
    return null;
  }

  const Icon = NotificationIcons[data.type];
  return createPortal(
    <div className={clsx(styles.notify, isOpen && styles.open)}>
      <Icon className={styles.notify__icon} />
      <p className={styles.notify__message}>{data.message}</p>
    </div>,
    notificationRoot,
  );
};
