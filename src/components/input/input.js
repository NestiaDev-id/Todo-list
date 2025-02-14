"use client";

import React from "react";

function Input({ name, type = "text", placeholder, value, onChange }) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
    />
  );
}

export default Input;
