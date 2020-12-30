import Answer from '../Answer'
import './Question.css'

const Question = ({question}) => {
    console.log(question)
    return (
        <>
        <h2 className='question'>{question.body}</h2>
       { console.log(question)}
        {question.Answers && question.Answers.map((answer) => {

            return <Answer answer={answer}/>
        })}
        </>
    )
}

export default Question
