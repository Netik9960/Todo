// src/components/TodoForm.js

import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
      completed: false,
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit"> + </button>
    </form>
  );
};

export default TodoForm;
