import {fetch} from './csrf.js'

const SET_QUESTIONS = 'questions/SET_QUESTIONS';

const CREATE_QUESTION = 'questions/CREATE_QUESTION';

export const setQuestions = questions => {
    return {
        type: SET_QUESTIONS,
        questions
    }
}

export const createQuestion = question => {
    return {
        type: CREATE_QUESTION,
        question
    }
}


export const getQuestions = () => {
    return async dispatch => {
        const res = await fetch('/api/questions');


            dispatch(setQuestions(res.data));

        return res;
    }
}

export const postQuestion = (body, userId) => {
    return async (dispatch) => {
        const res = await fetch('/api/questions', {method: 'POST', body: JSON.stringify({
           body,
           userId
          })
        })

            dispatch(createQuestion(res.data));

        return res;
    }
}






export default function questionsReducer(state=[], action) {
    switch (action.type) {
        case SET_QUESTIONS:
            return action.questions;
        case CREATE_QUESTION:
            return [...state, action.question]
        default:
            return state;

    }
}
