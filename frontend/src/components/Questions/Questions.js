import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Question from '../../components/Question'


const Questions = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);


    return (
        <>
        <h1>Questions</h1>
        { questions.map((question) =>
            <Question question={question}/>

        )}
        </>

    )
}

export default Questions
