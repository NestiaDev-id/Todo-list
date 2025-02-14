"use client";
import { useState } from "react";
import TodoList from "@/components/input/input";

export default function ClientPage() {
  // Dummy data
  const [todos] = useState(["Belajar Next.js", "Membuat To-Do List"]);

  return (
    <div className="w-screen py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold uppercase">Client Page</h1>
      <p className="mt-2 text-gray-600">Daftar tugas hanya bisa dibaca.</p>
      <TodoList todos={todos} isAdmin={false} />
    </div>
  );
}
