import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, OPEN, CLOSE } from '../actions';

const initState = {
    score: 0,
    like: 0,
    share: 0,
};

const initResultPageState = {
    open: false
};

function counter(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                score: state.score + 1
            };
        case DECREMENT:
            return {
                ...state,
                score: state.score - 1
            };
        default:
            return state;
    }
}

function likeCounter(state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                like: state.like + 1
            };
        case DECREMENT:
            return {
                ...state,
                like: state.like - 1
            };
        default:
            return state;
    }
}

function resultPageState(state = initResultPageState, action) {
    switch (action.type) {
        case OPEN:
            return {
                ...state,
                open: true
            };
        case CLOSE:
            return {
                ...state,
                open: false
            };
        default:
            return state;
    }
}

const mafiaApp = combineReducers({
    counter,
    likeCounter,
    resultPageState
});

export default mafiaApp;
