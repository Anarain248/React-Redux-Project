import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getUpVote} from '../../store/answers'

const Questions = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUpVote(1))
    },[dispatch])

    return (
        <h1>Questions</h1>

    )
}

export default Questions
