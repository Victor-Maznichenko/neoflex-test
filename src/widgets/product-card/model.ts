import { createEvent } from 'effector';

const addToCart = createEvent<Product>();

export const model = { addToCart };
