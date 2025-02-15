"use client";
import { useState, useEffect } from "react";
import TodoList from "@/components/input/input";

export default function ClientPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="w-screen py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold uppercase">Client Page</h1>
      <p className="mt-2 text-gray-600">Daftar tugas hanya bisa dibaca.</p>
      <TodoList todos={todos.map(todo => todo.text)} isAdmin={false} />
    </div>
  );
}
