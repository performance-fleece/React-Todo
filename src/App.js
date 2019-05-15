import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
    let newTask = { 
      task: this.state.task, 
      id: Date.now(), 
      completed: false 
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      task: "",
      id: "",
      completed: ""
    });
  };

  toggleCompleted = 


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList taskList={this.state.tasks} />
        <TodoForm 
          addTask={this.addTask}
          changeTask={this.changeTask}
          task={this.state.task}

        />
      </div>
      );
  }
}

export default App;
