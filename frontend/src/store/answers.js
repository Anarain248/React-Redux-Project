import { fetch } from './csrf.js';
const SET_ANSWERS = 'answers/SET_ANSWERS'
const setAnswers= (payload) => {
  return {
    type: SET_ANSWERS,
    payload
  }
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
