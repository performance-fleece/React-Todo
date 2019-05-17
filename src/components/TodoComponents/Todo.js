import React from "react";

const Todo = props => {
  return (
    <div
      className={`task${props.task.completed ? " completed" : ""}`}
      className="todo-item"
      onClick={() => props.toggleComplete(props.task.id)}
    >
      {props.task.task}
    </div>
  );
};

export default Todo;
