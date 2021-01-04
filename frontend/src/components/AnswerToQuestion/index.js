import {Link} from 'react-router-dom';
import './AnswerToQuestion.css'

const AnswerToQuestion = () => {
    return (
        <div className="answerspage">
        <h2 className="title">What is the best way to weight train?</h2>

        <h1 className="answer1"> 1. There is no best way to weight train, everybody is different and over time with varying rep ranges you will find your favorite. A quick guid would be strength with 1-5 reps, hypertrophy with 8-12 reps, and endurance with 15-25 reps.</h1>

        <h1 className="answer2"> 2. That will depend on your body type(whether you are a ectomorph, mesomorph, or endomorph) along with your body weight and daily activity</h1>

        <h1 className="answer3">3. Compound exercises work multiple muscle groups at the same time while Isolation exercises only work one muscle group at a time.</h1>

        <h1 className="answer4">4. There is no best way to weight train, everybody is different and over time with varying rep ranges you will find your favorite. A quick guid would be strength with 1-5 reps, hypertrophy with 8-12 reps, and endurance with 15-25 reps.</h1>

        <h1 className="answer5">5. That will depend on your body type(whether you are a ectomorph, mesomorph, or endomorph) along with your body weight and daily activity</h1>

        <h1 className="answer6">6. Compound exercises work multiple muscle groups at the same time while Isolation exercises only work one muscle group at a time.</h1>
        <Link to="/answer-question">
        <button className="submitbutton">
          Submit An Answer
          </button>
          </Link>

      </div>
    )
}

export default AnswerToQuestion
