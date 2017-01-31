export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

export function increment() {
    return { type: INCREMENT }
}

export function decrement() {
    return { type: DECREMENT }
}

export function open() {
    return { type: OPEN }
}

export function close() {
    return { type: CLOSE }
}
