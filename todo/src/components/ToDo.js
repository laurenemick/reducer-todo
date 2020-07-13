import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/reducers";

const ToDo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
  
    const [newTaskText, setNewTaskText] = useState("");

    const handleChanges = e => {
        setNewTaskText(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault()
        dispatch({
            type: "NEW_TASK",
            payload: newTaskText

        })
        setNewTaskText("");
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="task"
                    value={newTaskText}
                    onChange={handleChanges}
                />
                <button onClick={() => dispatch({ type: "ADD_TASK", payload: newTaskText })}>Add</button>
            </form>

        </div>
    )
};

export default ToDo;