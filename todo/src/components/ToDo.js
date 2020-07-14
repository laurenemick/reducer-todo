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
    };

    const toggleTask = taskId => {
        dispatch({ type: "TOGGLE_TASK", payload:taskId })
    };

    // const clearCompleted = e => {
    //     this.setState({
    //       tasks: this.state.tasks.filter(task => task.completed === false)
    //     });
    //   };

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
            {
                state.map(task => (
                    <div>
                        <div 
                            key={task.id}
                            onClick={() => {toggleTask(task.id)}} 
                            className={`task${task.completed? "completed" : ""}`}
                        >
                            {task.item}
                        </div>
                    </div>
                ))
            }
            <div>
                <button onClick={() => dispatch({ type: "REMOVE_COMPLETED" })}>Clear completed</button>   
            </div>
        </div>
    )
};

export default ToDo;