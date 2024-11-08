"use client";

import { useState } from "react";

export default function Calculadora() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center">
      <main className="flex flex-col gap-8 p-4 border rounded-md border-zinc-800 w-fit">
        <h1 className="text-3xl font-bold text-zinc-100">Calculadora Básica</h1>

        {/* Display de entrada */}
        <div className="bg-zinc-950 p-4 rounded-lg shadow-md w-80 max-w-md">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-4 text-2xl text-right text-white bg-transparent border-b border-zinc-800 focus:outline-none"
          />
        </div>

        {/* Botones de la calculadora */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button
              key={number}
              className="bg-zinc-800 p-4 rounded shadow hover:bg-zinc-700 text-lg font-semibold text-zinc-100 transition-colors duration-200"
              onClick={() => handleButtonClick(number.toString())}
            >
              {number}
            </button>
          ))}

          {["+", "-", "*", "/"].map((operator) => (
            <button
              key={operator}
              className="bg-indigo-600 p-4 rounded shadow hover:bg-indigo-700 text-lg font-semibold text-white transition-colors duration-200"
              onClick={() => handleButtonClick(operator)}
            >
              {operator}
            </button>
          ))}

          <button
            className="bg-red-500 p-4 rounded shadow hover:bg-red-600 text-lg font-semibold text-white col-span-2 transition-colors duration-200"
            onClick={handleClear}
          >
            Limpiar
          </button>
          <button
            className="bg-green-500 p-4 rounded shadow hover:bg-green-600 text-lg font-semibold text-white col-span-2 transition-colors duration-200"
            onClick={handleEvaluate}
          >
            =
          </button>
        </div>
      </main>
    </div>
  );
}
