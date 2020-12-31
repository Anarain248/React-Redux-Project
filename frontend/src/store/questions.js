
const SET_QUESTIONS = 'questions/SET_QUESTIONS';

const CREATE_QUESTION = 'questions/CREATE_QUESTION';

export const setQuestions = questions => {
    return {
        type: SET_QUESTIONS,
        questions
    }
}

export const createQuestion = questions => {
    return {
        type: CREATE_QUESTION,
        questions
    }
}


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

export const createQuestions = (questions) => {
    const {message} = questions;
    return async (dispatch) => {
        const res = await fetch('/api/questions', {method: 'POST', body: JSON.stringify({
           message
          })
        })
        res.data = await res.json();
        if(res.ok) {
            dispatch(createQuestions(res.data));
        }
        return res;
    }
}






export default function questionsReducer(state=[], action) {
    switch (action.type) {
        case SET_QUESTIONS:
            return action.questions;
        case CREATE_QUESTION:
            return action.questions;
        default:
            return state;

    }
}
