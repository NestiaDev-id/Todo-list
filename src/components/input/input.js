"use client";
import React from "react";
export default function TodoList({ todos, isAdmin, onDelete, onEdit, onToggleComplete }) {
  return (
    <ul className="mt-5 space-y-3">
      {todos.map((todo, index) => (
        <li key={todo.id} className="flex items-center gap-3 p-2 border rounded">
          {isAdmin && (
            <input 
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onToggleComplete(index)}
            />
          )}
          <span className={todo.isCompleted ? "line-through text-gray-500" : ""}>
            {todo.title}
          </span>
          {isAdmin && (
            <div className="ml-auto flex gap-2">
              <button onClick={() => onEdit(index)} className="text-blue-500">Edit</button>
              <button onClick={() => onDelete(index)} className="text-red-500">Delete</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
