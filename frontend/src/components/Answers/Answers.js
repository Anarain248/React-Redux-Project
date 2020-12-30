


const Answers = () => {
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
