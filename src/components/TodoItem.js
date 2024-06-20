// src/components/TodoItem.js

import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      {/* <button onClick={() => toggleComplete(todo.id)}></button> */}
      <button className='delete' onClick={() => removeTodo(todo.id)}>DEL</button>
    </div>
  );
};

export default TodoItem;
