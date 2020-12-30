
const SET_QUESTIONS = 'questions/SET_QUESTIONS';

export const setQuestions = questions => {
    return {
        type: SET_QUESTIONS,
        questions
    }
};

export const getQuestions = () => {
    return async dispatch => {
        const res = await fetch('/api/questions');
        res.data = await res.json();
        if(res.ok) {
            dispatch(setQuestions(res.data));
        }
        return res;
    }
}

export default function questionsReducer(state=[], action) {
    switch (action.type) {
        case SET_QUESTIONS:
            return action.questions;
        default:
            return state;

    }
}
