import { fetch } from './csrf.js';
const SET_ANSWERS = 'answers/SET_ANSWERS'
const setAnswers= (payload) => {
  return {
    type: SET_ANSWERS,
    payload
  }
};

export const getUpVote = (answerId) => async (dispatch) => {
    const res = await fetch('/api/votes/upVote', {method: 'POST', body: JSON.stringify({answerId})})
    const answers = res.data
    dispatch(setAnswers(answers))
};
export const getDownVote = (answerId) => async (dispatch) => {
  const res = await fetch('/api/votes/downVote', {method: 'POST', body: JSON.stringify({answerId})})
  const answers = res.data
  dispatch(setAnswers(answers))
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ANSWERS :
    return action.payload
    default:
      return state;
  }
}

export default reducer;
