"use client"; // Tambahkan ini di baris pertama!

import { useState } from "react";
import Input from "./../components/input/input"; // Sesuaikan path jika berbeda

export default function Home() {
  const [task, setTask] = useState(""); // State untuk input tugas
  const [tasks, setTasks] = useState([]); // State untuk daftar tugas

  // Fungsi menambahkan tugas baru
  const addTask = () => {
    if (task.trim() === "") return; // Cegah tugas kosong
    setTasks([...tasks, task]);
    setTask(""); // Reset input setelah menambahkan tugas
  };

  // Fungsi menghapus tugas berdasarkan index
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="w-screen py-20 flex flex-col items-center">
      <span className="text-4xl font-bold uppercase">To-Do List</span>
      
      {/* Input Tambah Tugas */}
      <div className="mt-5 flex gap-3">
        <Input
          name="task"
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button 
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* List Tugas */}
      <ul className="mt-5 w-1/2">
        {tasks.map((t, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md mt-2">
            <span>{t}</span>
            <button 
              onClick={() => removeTask(index)}
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
