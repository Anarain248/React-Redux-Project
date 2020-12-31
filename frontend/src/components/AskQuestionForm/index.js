import React, {useState} from "react";



 function AskQuestionForm() {
  const [questions, setQuestions] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);


  const handleSubmit = (event) => {
    console.log(`
      Question: ${questions}
    `);

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Question</h1>

      <label>
        Question:
        <input
          name="Question"
          type="question"
          value={questions}
          onChange={e => setQuestions(e.target.value)}
          required />
      </label>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          value={acceptedTerms}
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label>

      <button>Submit</button>
    </form>
  );
}

export default AskQuestionForm
