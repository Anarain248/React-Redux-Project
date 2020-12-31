import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const [description, setDescription] = useState("");



const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createExpense(description, parseInt(amount), parseInt(categoryId), userId));
    setDescription("");
    setAmount("");
};
