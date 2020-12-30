import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'


const Questions = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    questions.map((question) => {
        console.log(question)
    })

    return (
        <h1>Questions</h1>

    )
}

export default Questions
