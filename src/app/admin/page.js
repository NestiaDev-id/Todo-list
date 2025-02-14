"use client";
import { useState } from "react";
import TodoList from "@/components/input/input";

export default function AdminPage() {
  const [todos, setTodos] = useState(["Belajar Next.js", "Membuat To-Do List"]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Tambah Tugas
  const addTask = () => {
    if (newTask.trim() === "") return;
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = newTask;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, newTask]);
    }
    setNewTask("");
  };

  // Hapus Tugas
  const removeTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Edit Tugas
  const editTask = (index) => {
    setNewTask(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="w-screen py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold uppercase">Admin Page</h1>
      <p className="mt-2 text-gray-600">Kelola daftar tugas di sini.</p>

      {/* Input Tambah/Edit */}
      <div className="mt-5 flex gap-3">
        <input
          type="text"
          placeholder="Masukkan tugas baru"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md shadow-sm w-full"
        />
        <button 
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* List Tugas */}
      <TodoList todos={todos} isAdmin={true} onDelete={removeTask} onEdit={editTask} />
    </div>
  );
}
