import { Icons } from '@/shared/ui';
import { NotificationType } from '@/shared/lib';

export const NotificationIcons = {
  [NotificationType.Success]: Icons.Success,
  [NotificationType.Fail]: Icons.Fail,
};

export interface NotificationParams {
  type: NotificationType;
  message: string;
}

export const initialData = {
  type: NotificationType.Fail,
  message: 'Сообщение',
};

export const notificationRoot = document.getElementById('notification');
