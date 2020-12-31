import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Question from '../../components/Question'
import Answer from '../../components/Answer'
import './Questions.css'
import {Link } from 'react-router-dom'



const Questions = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);


    return (
        <>
        <h1 className="questions">All Questions</h1>
        <Link to="/ask-question">
        <button className="questionbutton">Ask a Question</button>
        </Link>
        { questions.map((question) =>
            <Question question={question}/>

        )}
        </>

    )
}

export default Questions
