"use client";
import React from "react";

export default function TodoList({ todos, isAdmin, onDelete, onEdit }) {
  return (
    <ul className="mt-5 w-1/2">
      {todos.map((todo, index) => (
        <li key={index} className="flex justify-between items-center bg-gray-100 text-black px-4 py-2 rounded-md mt-2">
          <span>{todo}</span>
          {isAdmin && (
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(index)}
                className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(index)}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
