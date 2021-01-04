import Answer from '../Answer'
import './Question.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Question = ({question}) => {
    // const answers = useSelector(state => state.answers);
    // // const filteredAnswer = answers.filter((answer) => {
    // //     return answer.questionId === question.id
    // // })
    return (
        <>
        <Link to={`/question/${question.id}`}>
        <h2 className='question'>{question.body}</h2>
        </Link>
       { console.log(question)}
        {question.Answers && question.Answers.map((answer) => {
            return <p className="answer">{answer.body}</p>
        })}
        </>
    )
}


export default Question
