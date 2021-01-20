// Consts
const RESET_TIMER = 'RESET_TIMER';
const START_TIMER = 'START_TIMER';
const STOP_TIMER = 'STOP_TIMER';
const WAIT_TIMER = 'WAIT_TIMER';


// initialState
const initialState = {
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: undefined
};
// Reducer
export const TimeReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_TIMER:
            return {
                ...state,
                baseTime: 0,
                startedAt: state.startedAt ? action.now : undefined,
                stoppedAt: state.stoppedAt ? action.now : undefined
            };
        case START_TIMER:
            return {
                ...state,
                baseTime: action.baseTime,
                startedAt: action.now,
                stoppedAt: undefined
            };
        case STOP_TIMER:
            return {
                ...state,
                startedAt: undefined,
                stoppedAt: undefined,
                baseTime: 0,
            }
        case WAIT_TIMER:
            return {
                ...state,
                stoppedAt: action.now
            }
        default:
            return state;
    }
}

// Action Creators
export const startTimer = (baseTime = 0) => {
    return {
        type: START_TIMER,
        baseTime: baseTime,
        now: Math.floor(Date.now() / 1000)
    };
}

export const stopTimer = () => {
    return {
        type: STOP_TIMER,
        now: Math.floor(Date.now() / 1000)
    };
}

export const waitTimer = () => {
    return {
        type: WAIT_TIMER,
        now: Math.floor(Date.now() / 1000)
    };
}

export const resetTimer = () => {
    return {
        type: RESET_TIMER,
        now: Math.floor(Date.now() / 1000)
    }
}