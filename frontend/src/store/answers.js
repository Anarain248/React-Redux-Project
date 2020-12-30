import { fetch } from './csrf.js';



const SET_ANSWERS = 'answers/SET_ANSWERS';

export const setAnswers = (answers) => {
    return {
        type: SET_ANSWERS,
        answers
    }
};

export const getAnswers = () => {
    return async dispatch => {
        const res = await fetch('/api/answers');
        res.data = await res.json();
        if(res.ok) {
            dispatch(setAnswers(res.data));
        }
        return res;
    }
}

export default function answersReducer(state={}, action) {
    switch (action.type) {
        case SET_ANSWERS:
            return action.answers;
        default:
            return state;

    }
  }
