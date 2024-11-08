"use client";
import { useState } from "react";

export default function ZonaMouse() {
  const [zona, setZona] = useState("");

  // Función que detecta en qué zona de la pantalla se hizo clic
  const detectarZona = (e) => {
    // Obtener el tamaño de la ventana
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;

    // Obtener las coordenadas del clic
    const x = e.clientX;
    const y = e.clientY;

    // Determinar en qué zona se hizo el clic
    if (x < anchoVentana / 2 && y < altoVentana / 2) {
      setZona("Izquierda Arriba");
    } else if (x < anchoVentana / 2 && y > altoVentana / 2) {
      setZona("Izquierda Abajo");
    } else if (x > anchoVentana / 2 && y < altoVentana / 2) {
      setZona("Derecha Arriba");
    } else if (x > anchoVentana / 2 && y > altoVentana / 2) {
      setZona("Derecha Abajo");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-6 p-6 border border-zinc-800 rounded-md w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">Detectar Zona del Ratón</h1>

        {/* Instrucciones */}
        <p className="text-zinc-600 mb-4">
          Haz clic en cualquier parte de la pantalla para saber en qué zona se encuentra el clic.
        </p>

        {/* Zona de clic */}
        <div
          onClick={detectarZona}
          className="w-full h-96 border border-zinc-700 rounded-md bg-zinc-800 flex justify-center items-center"
        >
          <p className="text-white font-semibold">
            {zona ? `Zona: ${zona}` : "Haz clic en la pantalla para detectar la zona"}
          </p>
        </div>
      </main>
    </div>
  );
}
