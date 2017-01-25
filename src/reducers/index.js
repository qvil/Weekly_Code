import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from '../actions';

const initState = {
    score: 0
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

const counterApp = combineReducers({
    counter
});

export default counterApp;
