import React from 'react';

const TodoForm = props => {
    return (
        <form name="taskAddForm" onSubmit={props.addTask}>
        <input type="text" value={props.task} placeholder="..todo" name="task" onChange={props.changeTask} />
        <button onClick={props.addTask}>Add Task</button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
        
        </form>
    )
}

export default TodoForm;