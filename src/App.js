import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

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
    localStorage.setItem(event.target.name, event.target.value)
  };

  updateInput(key, value) {
    this.setState({ [key]: value });
    localStorage.setItem(key, value);
  }

 

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

    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    localStorage.setItem("newTask", "");
  };

  toggleComplete = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
            
          };
        }
        return task;
      })
    });
  };

  // clearComplete = event => {
  //   event.preventDefault();
  //   this.setState({
  //     tasks: this.state.tasks.filter(task => !task.completed)
  //   });
  //   localStorage.setItem("tasks", JSON.stringify())
  // };

  clearComplete = event => {
    event.preventDefault();
    const tasks = [...this.state.tasks];
    const updatedTasks = tasks.filter(task => !task.completed)
    this.setState({ tasks: updatedTasks });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  componentDidMount() {
    this.hydrateState();
  }

  hydrateState() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value=localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        }  catch (e) {
          this.setState({ [key]: value })
        }
      }
    }
  }

  render() {
    return (
      <div className="todo-app">
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        tasks={this.state.tasks} 
        toggleComplete={this.toggleComplete} 
        />
        <TodoForm 
          addTask={this.addTask}
          changeTask={this.changeTask}
          task={this.state.task}
          clearComplete={this.clearComplete}

        />
      </div>
      );
  }
}

export default App;
