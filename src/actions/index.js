export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';
export const GET_MAFIA = 'GET_MAFIA';
export const SET_MAFIA = 'SET_MAFIA';

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

export function getMafia() {
    return { type: GET_MAFIA }
}

export function setMafia(mafiaInfo) {
    return {
        type: SET_MAFIA,
        mafiaInfo: mafiaInfo
    }
}
