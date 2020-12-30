import Answer from '../../components/Answer'
import {useDispatch, useSelector} from 'react-redux'



const Answers = () => {
    const dispatch = useDispatch();
    const answers = useSelector(state => state.answers);
    return (
        <>
        <h1>Answers</h1>

        { answers.map((answer) =>
            <Answer answer={answer}/>

        )}
        </>

    )
}

export default Answers
