import React, { useState } from 'react';
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = useState([
	  {id: 1, content: 'Meet Masao for Udon'},
	  {id: 2, content: 'Fix up these horrible react notes'},
  ]);
  function deleteTodo(id) {
	  setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  return (
	<div className="App">
      <h1>Things to do</h1>
      <TodoList todos={todos} deleter={deleteTodo}/>
    </div>
  );
}
