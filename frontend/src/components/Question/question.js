import Answer from '../Answer'
import './Question.css'
import {Link} from 'react-router-dom'

const Question = ({question}) => {
    console.log(question)
    return (
        <>
        <Link to={`/question/${question.id}`}>
        <h2 className='question'>{question.body}</h2>
        </Link>
       { console.log(question)}
        {question.Answers && question.Answers.map((answer) => {

            return <Answer answer={answer}/>
        })}
        </>
    )
}

export default Question
