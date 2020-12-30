const Questions = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUpVote(1))
    },[dispatch])

    return (
        <h1>Questions</h1>

    )
}
