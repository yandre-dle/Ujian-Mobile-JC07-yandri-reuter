import {
    POSTING_UPDATE,
    POSTING_CREATE
} from '../actions/types';


const INITIAL_STATE = {
    link: '',
    caption: '',
    email: '',
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POSTING_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case POSTING_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};