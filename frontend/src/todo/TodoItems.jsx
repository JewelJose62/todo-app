// import React from 'react'

// const TodoItems = ({id,text,inComplete,onDelete}) => {
//   return (
//     <div >
//        <div className='flex gap-5 items-center justify-content-center'>
//          <i className="fa-solid fa-square-check cursor-pointer"></i>
//         <p>{text}</p>
//       <i className="fa-solid fa-trash cursor-pointer"  onClick={() => onDelete(id)}></i>
      
//        </div>
//     </div>
//   )
// }

// export default TodoItems




import React from 'react';

const TodoItem = ({
  todo,
  deleteTodo,
  toggleComplete,
  startEditing,
  isEditing,
  editingText,
  setEditingText,
  saveEdit,
}) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            className="border px-2 py-1 rounded"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
        ) : (
          <p
            className={`${
              todo.isComplete ? 'line-through text-gray-500' : ''
            }`}
          >
            {todo.text}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={() => saveEdit(todo.id)}
            className="text-green-600 hover:underline"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => startEditing(todo.id, todo.text)}
            className="text-blue-600 hover:underline"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
