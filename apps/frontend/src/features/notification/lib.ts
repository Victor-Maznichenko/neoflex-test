import { NotificationType } from '@/shared/lib';
import { Icons } from '@/shared/ui';

export const NotificationIcons = {
  [NotificationType.Success]: Icons.Success,
  [NotificationType.Fail]: Icons.Fail,
};

export interface NotificationParams {
  message: string;
  type: NotificationType;
}

export const initialData = {
  type: NotificationType.Fail,
  message: 'Сообщение',
};

export const notificationRoot = document.getElementById('notification');
