
import {useDispatch, useSelector} from 'react-redux'
import Question from '../../components/Question'
import Answer from '../../components/Answer'
import './Questions.css'
import {Link } from 'react-router-dom'
import {getAnswers} from '../../store/answers'
import { useEffect } from 'react'



const Questions = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);

    useEffect(() => {
        dispatch(getAnswers())
    }, [dispatch])


    return (
        <div className="page-color">
        <h1 className="questions">All Questions</h1>
        <Link to="/ask-question">
        <button className="questionbutton">Ask a Question</button>
        </Link>
        { questions.map((question) =>
            <Question question={question}/>

        )}
        </div>

    )
}

export default Questions
