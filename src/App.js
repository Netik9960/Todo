// src/App.js

import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
import Header from './components/Header.jsx';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  
  return (
    <div>
       <Header/>

       
   
    <div className="App" >
      
      <h1 >Todo <span>List</span></h1>
      <hr></hr>
      <TodoForm addTodo={addTodo} />
      <TodoList class="list" todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
    </div>
  );
};

export default App;
