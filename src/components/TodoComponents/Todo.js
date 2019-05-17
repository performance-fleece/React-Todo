import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div
            className={`task${props.task.completed ? " completed" : "" }`}
            onClick={() => props.toggleComplete(props.task.id)}
            >{`${props.task.task} completed: ${props.task.completed}`}</div>

        )
}

export default Todo;