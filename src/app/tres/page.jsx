"use client";
import { useState } from "react";

export default function Condiciones() {
  const [numero1, setNumero1] = useState(5);
  const [numero2, setNumero2] = useState(8);
  const [mensajes, setMensajes] = useState([]);

  const verificarCondiciones = () => {
    const nuevosMensajes = [];

    if (numero2 > numero1) {
      nuevosMensajes.push("1. numero1 no es mayor que numero2.");
    }

    if (numero2 > 0) {
      nuevosMensajes.push("2. numero2 es positivo.");
    }

    if (numero1 < 0 || numero1 !== 0) {
      nuevosMensajes.push("3. numero1 es negativo o distinto de cero.");
    }

    if (numero1 + 1 < numero2) {
      nuevosMensajes.push("4. Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2.");
    }

    setMensajes(nuevosMensajes);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-6 p-6 border border-zinc-800 rounded-md w-fit shadow-lg ">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">Comparación de Números</h1>

        {/* Entradas para numero1 y numero2 */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1">Número 1:</label>
            <input
              type="number"
              value={numero1}
              onChange={(e) => setNumero1(parseInt(e.target.value))}
              className="w-full p-2 border bg-zinc-800 border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-1">Número 2:</label>
            <input
              type="number"
              value={numero2}
              onChange={(e) => setNumero2(parseInt(e.target.value))}
              className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Botón para verificar condiciones */}
        <button
          onClick={verificarCondiciones}
          className="bg-indigo-500 px-5 py-2 rounded-md shadow hover:bg-indigo-600 text-white font-semibold transition-colors duration-200 mt-4"
        >
          Verificar Condiciones
        </button>

        {/* Resultados */}
        <div className="mt-4 space-y-3">
          {mensajes.length === 0 ? (
            <p className="text-zinc-500 text-center">
              No hay mensajes que mostrar. Presiona "Verificar Condiciones" para obtener resultados.
            </p>
          ) : (
            mensajes.map((mensaje, index) => (
              <p
                key={index}
                className="bg-zinc-800  text-white text-md p-3 rounded-md shadow-sm"
              >
                {mensaje}
              </p>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
