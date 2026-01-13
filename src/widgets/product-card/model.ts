import { createEvent } from 'effector';
import { throttle } from 'patronum';

const addToCart = createEvent<Product>();
const debouncedAddToCart = throttle(addToCart, 300);

export const model = { addToCart, debouncedAddToCart };
