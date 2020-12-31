import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import question from '../../../../backend/db/models/question';

const [questions, setQuestions] = useState("");



const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(question(description, userId));
    setDescription("");
};

return (
    <div className="form-container">
      <form className="askquestion-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="questions"
          placeholder="Questions"
          value={description}
          onChange={(e) => setQuestions(e.target.value)}
        />
        <button type="submit" disabled={!isFormValid()}>
          Create Expense
        </button>
      </form>
    </div>
  );
}
