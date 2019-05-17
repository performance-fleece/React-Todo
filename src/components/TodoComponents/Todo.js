import React from "react";

const Todo = props => {
  return (
    <div className="todo-item" onClick={() => props.toggleComplete(props.task.id)}>
      <p className="checkmark">{props.task.completed ? "X" : ""}</p>
      <p className={`task${props.task.completed ? " completed" : ""}`}>
        {props.task.task}
      </p>
    </div>
  );
};

export default Todo;
