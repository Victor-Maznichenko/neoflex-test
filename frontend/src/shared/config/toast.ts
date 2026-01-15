import { createEvent, createStore, sample } from 'effector';
import { delay } from 'patronum';
import clsx from 'clsx';
import { NotificationType } from '../lib/constants/general';

interface Toast {
  id: number;
  title?: string;
  message?: string;
  className?: string;
  type: NotificationType;
}

type ToastParams = Omit<Toast, 'id'>;

const $queueToasts = createStore<Toast[]>([]);

const show = createEvent<ToastParams>();
const hide = createEvent<number>();
const clean = createEvent();

const createdToast = sample({
  clock: show,
  fn: (toast) => ({ id: Date.now(), ...toast }) as Toast,
});

sample({
  clock: createdToast,
  source: $queueToasts,
  fn: (queueToasts, toast) => [...queueToasts, toast],
  target: $queueToasts,
});

// Hide after timeout
const scheduleHide = delay(createdToast, 1000);

sample({
  clock: scheduleHide,
  fn: ({ id }) => id,
  target: hide,
});

// Hide toast
const delayedHide = delay(hide, 350);

sample({
  clock: hide,
  source: $queueToasts,
  fn: (queueToasts, id) => {
    const queueToastsCopied = structuredClone(queueToasts);
    const hidenToast = queueToastsCopied.find((toast) => toast.id === id);

    if (hidenToast) {
      hidenToast.className = clsx(hidenToast?.className, 'hide');
    }

    return queueToastsCopied;
  },
  target: $queueToasts,
});

sample({
  clock: delayedHide,
  source: $queueToasts,
  fn: (queueToasts, id) => queueToasts.filter((toast) => toast.id !== id),
  target: $queueToasts,
});

export const toastModel = {
  show,
  hide,
  clean,
  $queueToasts,
};
