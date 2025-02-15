"use client";
import { useState, useEffect } from "react";
import TodoList from "@/components/input/input";

export default function AdminPage() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState(null);

  // Ambil data dari database
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  // Tambah atau Edit Tugas
  const addTask = async () => {
    if (newTask.trim() === "") return;
    if (editId) {
      await fetch("/api/todos", {
        method: "PUT",
        body: JSON.stringify({ id: editId, text: newTask }),
      });
    } else {
      await fetch("/api/todos", {
        method: "POST",
        body: JSON.stringify({ text: newTask }),
      });
    }
    setNewTask("");
    setEditId(null);
    fetchTodos();
  };

  // Hapus Tugas
  const removeTask = async (id) => {
    await fetch("/api/todos", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    fetchTodos();
  };

  // Edit Tugas
  const editTask = (id, text) => {
    setNewTask(text);
    setEditId(id);
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
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* List Tugas */}
      <TodoList 
        todos={todos.map(todo => todo.text)}
        isAdmin={true}
        onDelete={(index) => removeTask(todos[index].id)}
        onEdit={(index) => editTask(todos[index].id, todos[index].text)}
      />
    </div>
  );
}