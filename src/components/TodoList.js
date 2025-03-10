// src/components/TodoList.js

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos , removeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          // toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
