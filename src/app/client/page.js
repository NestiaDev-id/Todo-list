"use client";
import { useState, useEffect } from "react";
import TodoList from "@/components/input/input";

export default function ClientPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  return (
    <div className="w-screen py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold uppercase">Client</h1>
      <p className="mt-2 text-gray-600">Daftar tugas hanya bisa dibaca.</p>

      {todos.length === 0 ? (
        <p className="mt-5 text-gray-500">Belum ada tugas.</p>
      ) : (
        <TodoList todos={todos} isAdmin={false} />
      )}
    </div>
  );
}