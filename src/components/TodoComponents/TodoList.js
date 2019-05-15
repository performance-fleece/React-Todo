// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo';

import React from 'react';

const TodoList = props => {
    return (
            <div className="todo-item">
                {props.taskList.map(tasks => (
                    <Todo task={tasks.task} />
                ))}
            </div>
        ) ;
    

}

export default TodoList;