// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo';

import React from 'react';

const TodoList = props => {
    return (
      <div className="todo-list">
        {props.tasks.map(task => (
          <Todo
            key={task.id}
            task={task}
            toggleComplete={props.toggleComplete}
          />
        ))}
      </div>
    );
    

}

export default TodoList;