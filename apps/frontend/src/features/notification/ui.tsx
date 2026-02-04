import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { createPortal } from 'react-dom';
import { toastModel } from '@/shared/config';
import { Icons } from '@/shared/ui';
import { NotificationIcons, notificationRoot } from './lib';
import styles from './styles.module.scss';

export const Notifications = () => {
  const [queueToasts, hide] = useUnit([toastModel.$queueToasts, toastModel.hide]);

  if (!notificationRoot) {
    console.error('Notification root not found');
    return null;
  }

  return createPortal(
    <div className={styles.notifications}>
      {queueToasts.map(({ id, message, type, className }) => {
        const Icon = NotificationIcons[type];
        return (
          <div key={id} className={clsx(styles.notify, className)}>
            <Icon className={styles.notify__icon} />
            <p className={styles.notify__message}>{message}</p>
            <button type='button' onClick={() => hide(id)}>
              <Icons.Close />
            </button>
          </div>
        );
      })}
    </div>,
    notificationRoot
  );
};
