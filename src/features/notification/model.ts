import { debounce, delay } from 'patronum';
import { createEvent, createStore, sample } from 'effector';
import { initialData, NotificationParams } from './lib';

const $data = createStore<NotificationParams>(initialData);
const $isOpen = createStore(false);
const show = createEvent<NotificationParams>();
const debouncedShow = debounce(show, 500);

sample({
  clock: show,
  target: $data,
});

sample({
  clock: show,
  fn: () => true,
  target: $isOpen,
});

sample({
  clock: delay({ source: debouncedShow, timeout: 500 }),
  fn: () => false,
  target: $isOpen,
});

export const model = {
  $data,
  $isOpen,
  show,
};
