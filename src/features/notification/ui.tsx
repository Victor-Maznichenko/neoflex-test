import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { useUnit } from 'effector-react';
import { NotificationIcons, notificationRoot } from './lib';
import { toastModel } from '@/shared/config';
import { Icons } from '@/shared/ui';
import styles from './styles.module.scss';

export const Notifications = () => {
  const [queueToasts, hide] = useUnit([toastModel.$queueToasts, toastModel.hide]);

  if (!notificationRoot) {
    // eslint-disable-next-line no-console
    console.error('Notification root not found');
    return null;
  }

  return createPortal(
    <div className={styles.notifications}>
      {queueToasts.map(({ id, message, type, className }) => {
        const Icon = NotificationIcons[type];
        return (
          <div className={clsx(styles.notify, className)} key={id}>
            <Icon className={styles.notify__icon} />
            <p className={styles.notify__message}>{message}</p>
            <button onClick={() => hide(id)}>
              <Icons.Close />
            </button>
          </div>
        );
      })}
    </div>,
    notificationRoot,
  );
};
