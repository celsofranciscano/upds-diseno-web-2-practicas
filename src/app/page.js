'use client'; // Marca el componente como de cliente

import { useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [input, setInput] = useState(""); // Estado para manejar la entrada

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput(""); // Limpiar la entrada
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString()); // Evaluar la expresión
    } catch (error) {
      setInput("Error"); // Mostrar error si la expresión es inválida
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-white shadow-lg">Calculadora Básica</h1>

        {/* Mostrar la entrada */}
        <div className="bg-white p-6 rounded-lg shadow-2xl w-80 max-w-md">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-4 text-2xl text-right text-gray-800 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {/* Botones de la calculadora */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          {/* Botones numéricos */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
            <button
              key={number}
              className="bg-gray-200 p-5 rounded-lg shadow-md hover:bg-indigo-400 transition-colors duration-300 text-xl font-semibold text-gray-800"
              onClick={() => handleButtonClick(number.toString())}
            >
              {number}
            </button>
          ))}

          {/* Botones de operadores */}
          {["+", "-", "*", "/"].map((operator) => (
            <button
              key={operator}
              className="bg-indigo-500 p-5 rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300 text-white text-xl font-semibold"
              onClick={() => handleButtonClick(operator)}
            >
              {operator}
            </button>
          ))}

          {/* Botones de limpiar y evaluar */}
          <button
            className="bg-red-500 text-white p-5 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 col-span-2"
            onClick={handleClear}
          >
            Limpiar
          </button>
          <button
            className="bg-green-500 text-white p-5 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 col-span-2"
            onClick={handleEvaluate}
          >
            =
          </button>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
