import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, OPEN, CLOSE, GET_MAFIA, SET_MAFIA } from '../actions';

const initState = {
    score: 0,
    like: 0,
    share: 0,
};

const initResultPageState = {
    open: false
};

const initMafiaState = {
    mafiaInfo: {
        userImage: "http://semantic-ui.com/images/avatar2/large/rachel.png",
        userId: "ddd",
        userCharacter: "civil",
        userDescription: "I'm docter",
        userKillScore: "0",
    }
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

function mafia(state = initMafiaState, action) {
    switch (action.type) {
        case GET_MAFIA:
            return {
                ...state
            };
        case SET_MAFIA:
            return {
                ...state,
                mafiaInfo: action.mafiaInfo
            };
        default:
            return state;
    }
}

const mafiaApp = combineReducers({
    counter,
    likeCounter,
    resultPageState,
    mafia
});

export default mafiaApp;
