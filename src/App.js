import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const taskList = [
  {
    task: "test task",
    id: 1111111,
    completed: false
  },
  { 
    task: "task numba 2",
    id: 22222222,
    completed: false  
  }
];

const defaultState = {
  tasks: taskList,
  task: "",
  id: "",
  completed: ""
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = defaultState;
    
    
  }

  changeTask = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

 

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTask = event => {
    event.preventDefault();
    const newTask = { task: this.state.task, id: Date.now(), completed: false };
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList taskList={this.state.tasks} />

      </div>
      );
  }
}

export default App;
