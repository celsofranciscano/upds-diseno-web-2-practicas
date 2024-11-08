"use client";
import React, { useState } from "react";

export default function MostrarContenido() {
  const [contenidoVisible, setContenidoVisible] = useState(false);
  const [enlaceVisible, setEnlaceVisible] = useState(true);

  // Función para manejar el clic en el enlace
  const mostrarContenido = () => {
    setContenidoVisible(true);
    setEnlaceVisible(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-6 p-6 border border-zinc-400 rounded-md w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
          Mostrar Contenido al Hacer Clic
        </h1>

        {/* Enlace que desaparece al hacer clic */}
        {enlaceVisible && (
          <a
            href="#"
            onClick={mostrarContenido}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-300 transition-colors duration-200"
          >
            Ver contenido completo
          </a>
        )}

        {/* Contenido que se muestra al hacer clic */}
        {contenidoVisible && (
          <div className="mt-4 p-4 border border-zinc-100 rounded text-zinc-100">
            <p>
              Este es el contenido completo que se muestra después de hacer clic en el enlace. Puedes agregar aquí cualquier
              texto que desees mostrar al usuario. El enlace desaparecerá una vez que se haya hecho clic.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
