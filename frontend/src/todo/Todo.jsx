import React, { useState, useRef } from 'react';
import TodoItem from './TodoItems'

const Todo = () => {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTodo = () => {
    const text = inputRef.current.value.trim();
    if (!text) return;

    const newTodo = {
      id: Date.now(),
      text,
      isComplete: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    );
    setEditingId(null);
    setEditingText('');
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-7 bg-gray-100">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-center text-pink-600">TODO APP</h1>
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a todo"
            className="flex-1 p-2 rounded-lg border border-gray-300"
          />
          <button
            onClick={addTodo}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
          >
            Add +
          </button>
        </div>

        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            startEditing={startEditing}
            isEditing={editingId === todo.id}
            editingText={editingText}
            setEditingText={setEditingText}
            saveEdit={saveEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;