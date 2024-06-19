// src/components/TodoItem.js

import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => toggleComplete(todo.id)}>Complete</button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
