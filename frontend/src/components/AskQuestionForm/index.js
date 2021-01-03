import React, {useState} from "react";
import {postQuestion} from '../../store/questions';
import {useDispatch, useSelector} from 'react-redux';
import './AskQuestionForm.css'


 function AskQuestionForm() {

  const [questions, setQuestions] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const dispatch = useDispatch()
  const userId = useSelector(state => state.session.user.id)


  const handleSubmit = (event) => {
    console.log(`
      Question: ${questions}
    `);

    event.preventDefault();
    dispatch(postQuestion(questions, userId))

  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="ask">Ask Question</h1>

      <label className="questionlabel">
        Question:
        <input
          name="Question"
          type="question"
          value={questions}
          onChange={e => setQuestions(e.target.value)}
          required />
      </label>

      <label className="terms">
        <input
          name="acceptedTerms"
          type="checkbox"
          value={acceptedTerms}
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label>

      <button className="submitbutton">Submit</button>
    </form>
  );
}

export default AskQuestionForm
