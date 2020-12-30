import Answer from '../../components/Answer'



const Answers = () => {
    return (
        <>
        <h1>Answers</h1>

        { Answers.map((answer) =>
            <Answer answer={answer}/>

        )}
        </>

    )
}

export default Answers
