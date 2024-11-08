"use client";
import React, { useEffect, useState } from "react";

export default function InfoEnlaces() {
  const [numEnlaces, setNumEnlaces] = useState(0);
  const [penultimoEnlace, setPenultimoEnlace] = useState("");
  const [numEnlacesTercerParrafo, setNumEnlacesTercerParrafo] = useState(0);

  useEffect(() => {
    // Número de enlaces en la página
    const enlaces = document.querySelectorAll("a");
    setNumEnlaces(enlaces.length);

    // Dirección del penúltimo enlace
    if (enlaces.length >= 2) {
      setPenultimoEnlace(enlaces[enlaces.length - 2].href);
    }

    // Número de enlaces en el tercer párrafo
    const tercerParrafo = document.querySelectorAll("p")[2];
    const enlacesTercerParrafo = tercerParrafo ? tercerParrafo.querySelectorAll("a") : [];
    setNumEnlacesTercerParrafo(enlacesTercerParrafo.length);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-6 p-6 border border-zinc-200 rounded-md w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
          Información de Enlaces
        </h1>

        {/* Mostrar los resultados */}
        <div className="mt-4 space-y-4">
          <p className="text-lg">
            <strong>1. Número de enlaces en la página:</strong> {numEnlaces}
          </p>
          <p className="text-lg">
            <strong>2. Dirección del penúltimo enlace:</strong> {penultimoEnlace || "No hay penúltimo enlace"}
          </p>
          <p className="text-lg">
            <strong>3. Número de enlaces en el tercer párrafo:</strong> {numEnlacesTercerParrafo}
          </p>
        </div>
      </main>
    </div>
  );
}
