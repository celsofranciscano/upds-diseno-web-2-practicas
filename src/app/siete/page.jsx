"use client";
import React, { useState } from "react";

export default function ListaDinamica() {
  const [items, setItems] = useState([]); // Estado para almacenar los elementos de la lista

  // Función para añadir un nuevo elemento a la lista
  const agregarElemento = () => {
    const nuevoElemento = `Elemento ${items.length + 1}`; // Genera un nuevo elemento con un número incremental
    setItems((prevItems) => [...prevItems, nuevoElemento]); // Añade el nuevo elemento al final de la lista
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-6 p-6 border border-zinc-800 rounded-md w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
          Lista Dinámica
        </h1>

        {/* Botón para añadir un nuevo elemento a la lista */}
        <button
          onClick={agregarElemento}
          className="bg-indigo-500 text-white px-5 py-2 rounded-md shadow hover:bg-indigo-600 transition-colors duration-200"
        >
          Añadir Elemento
        </button>

        {/* Lista de elementos */}
        <ul className="mt-4 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="p-2 border border-zinc-700 rounded text-zinc-500">
              {item}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
