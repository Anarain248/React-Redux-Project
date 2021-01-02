import { fetch } from './csrf.js';

const CREATE_ANSWER = 'questions/CREATE_ANSWER';

const SET_ANSWERS = 'answers/SET_ANSWERS';

export const setAnswers = (answers) => {
    return {
        type: SET_ANSWERS,
        answers
    }
};

export const createAnswer = (answer) => {
  return {
    type: CREATE_ANSWER,
    answer
  }
}

export const getAnswers = () => {
    return async dispatch => {
        const res = await fetch('/api/answers');
        
        if(res.ok) {
            dispatch(setAnswers(res.data));
        }
        return res;
    }
}
export const postAnswer = (body, userId) => {
  return async (dispatch) => {
      const res = await fetch('/api/answers', {method: 'POST', body: JSON.stringify({
         body,
         userId
        })
      })

          dispatch(createAnswer(res.data));

      return res;
  }
}

export default function answersReducer(state=[], action) {
    switch (action.type) {
        case SET_ANSWERS:
            return action.answers;
        case CREATE_ANSWER:
            return [...state, action.answer]
        default:
            return state;

    }
  }
