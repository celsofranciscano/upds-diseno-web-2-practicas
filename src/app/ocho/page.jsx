"use client";
import { useState } from "react";

export default function SeccionesInteractivos() {
  // Estado para manejar la visibilidad de las secciones
  const [seccionesVisibles, setSeccionesVisibles] = useState({
    seccion1: true,
    seccion2: true,
    seccion3: true,
  });

  // Función para alternar la visibilidad de una sección
  const toggleSeccion = (seccion) => {
    setSeccionesVisibles((prevState) => ({
      ...prevState,
      [seccion]: !prevState[seccion], // Alterna la visibilidad de la sección
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-6 p-6 border border-zinc-800 rounded-md w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
          Secciones Interactivas
        </h1>

        {/* Enlaces para alternar visibilidad de las secciones */}
        <div className="space-y-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleSeccion("seccion1");
            }}
            className="text-indigo-500 hover:text-indigo-700"
          >
            {seccionesVisibles.seccion1
              ? "Ocultar Sección 1"
              : "Mostrar Sección 1"}
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleSeccion("seccion2");
            }}
            className="text-indigo-500 hover:text-indigo-700"
          >
            {seccionesVisibles.seccion2
              ? "Ocultar Sección 2"
              : "Mostrar Sección 2"}
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleSeccion("seccion3");
            }}
            className="text-indigo-500 hover:text-indigo-700"
          >
            {seccionesVisibles.seccion3
              ? "Ocultar Sección 3"
              : "Mostrar Sección 3"}
          </a>
        </div>

        {/* Secciones que pueden ocultarse o mostrarse */}
        <div className="space-y-4 mt-6">
          {seccionesVisibles.seccion1 && (
            <div className="p-4 border border-zinc-700 rounded-md">
              <h2 className="text-xl font-semibold text-indigo-600">Sección 1</h2>
              <p className="text-zinc-500">
                Contenido de la sección 1. Haz clic en el enlace para ocultarla o mostrarla.
              </p>
            </div>
          )}

          {seccionesVisibles.seccion2 && (
            <div className="p-4 border border-zinc-700 rounded-md">
              <h2 className="text-xl font-semibold text-indigo-600">Sección 2</h2>
              <p className="text-zinc-500">
                Contenido de la sección 2. Haz clic en el enlace para ocultarla o mostrarla.
              </p>
            </div>
          )}

          {seccionesVisibles.seccion3 && (
            <div className="p-4 border border-zinc-700 rounded-md">
              <h2 className="text-xl font-semibold text-indigo-600">Sección 3</h2>
              <p className="text-zinc-500">
                Contenido de la sección 3. Haz clic en el enlace para ocultarla o mostrarla.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
