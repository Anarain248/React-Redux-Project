import React, {useState} from "react";
import {postAnswer} from '../../store/answers';
import {useDispatch, useSelector} from 'react-redux';
import Answers from "../Answers";
import './SubmitAnswerForm.css'


 function SubmitAnswerForm() {

  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch()
  const userId = useSelector(state => state.session.user.id)


  const handleSubmit = (event) => {
    console.log(`
      Answer: ${answer}
    `);

    event.preventDefault();
    dispatch(postAnswer(answer, userId))

  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="answerquestion">Answer Question</h1>

      <label className="answer">
        Answer:
        <input
          name="Answer"
          type="Answer"

          onChange={e => setAnswer(e.target.value)}
          required />
      </label>

      <button className="submitbutton">Submit</button>
    </form>
  );
}

export default SubmitAnswerForm
