"use client";
import { useState } from "react";

export default function TextoFormulario() {
  const [texto, setTexto] = useState("");
  const [informacion, setInformacion] = useState(null);

  // Función para procesar el texto cuando el formulario es enviado
  const procesarTexto = () => {
    const palabras = texto.split(" ").filter(Boolean); // Dividir el texto en palabras y eliminar espacios vacíos

    // Generar la información solicitada
    const numeroPalabras = palabras.length;
    const primeraPalabra = palabras[0] || "";
    const ultimaPalabra = palabras[palabras.length - 1] || "";
    const palabrasInversas = palabras.slice().reverse().join(" ");
    const palabrasOrdenadasAZ = palabras.slice().sort().join(" ");
    const palabrasOrdenadasZA = palabras.slice().sort((a, b) => b.localeCompare(a)).join(" ");

    // Crear un objeto con toda la información
    const nuevaInformacion = {
      numeroPalabras,
      primeraPalabra,
      ultimaPalabra,
      palabrasInversas,
      palabrasOrdenadasAZ,
      palabrasOrdenadasZA,
    };

    setInformacion(nuevaInformacion);

    // Abrir una ventana nueva para mostrar la información
    const ventanaNueva = window.open("", "_blank", "width=500, height=500");
    ventanaNueva.document.write("<h1>Información del Texto</h1>");
    ventanaNueva.document.write(`<p><strong>Número de palabras:</strong> ${numeroPalabras}</p>`);
    ventanaNueva.document.write(`<p><strong>Primera palabra:</strong> ${primeraPalabra}</p>`);
    ventanaNueva.document.write(`<p><strong>Última palabra:</strong> ${ultimaPalabra}</p>`);
    ventanaNueva.document.write(`<p><strong>Palabras en orden inverso:</strong> ${palabrasInversas}</p>`);
    ventanaNueva.document.write(`<p><strong>Palabras ordenadas (A-Z):</strong> ${palabrasOrdenadasAZ}</p>`);
    ventanaNueva.document.write(`<p><strong>Palabras ordenadas (Z-A):</strong> ${palabrasOrdenadasZA}</p>`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-6 p-6 border border-zinc-800 rounded-md w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">Procesar Texto</h1>

        {/* Formulario para ingresar texto */}
        <div>
          <label htmlFor="texto" className="block text-sm font-semibold text-zinc-100 mb-2">Introduce una cadena de texto:</label>
          <textarea
            id="texto"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            className="w-full p-3 border bg-zinc-800 border-zinc-700 rounded  placeholder:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={5}
          />
        </div>

        {/* Botón para procesar el texto */}
        <button
          onClick={procesarTexto}
          className="bg-indigo-700 px-5 py-2 rounded-md shadow hover:bg-indigo-600 text-blue-50 font-semibold transition-colors duration-200"
        >
          Procesar Texto
        </button>

        {/* Mostrar la información procesada en la interfaz (opcional) */}
        {informacion && (
          <div className="mt-6 text-zinc-100">
            <p><strong>Número de palabras:</strong> {informacion.numeroPalabras}</p>
            <p><strong>Primera palabra:</strong> {informacion.primeraPalabra}</p>
            <p><strong>Última palabra:</strong> {informacion.ultimaPalabra}</p>
            <p><strong>Palabras en orden inverso:</strong> {informacion.palabrasInversas}</p>
            <p><strong>Palabras ordenadas (A-Z):</strong> {informacion.palabrasOrdenadasAZ}</p>
            <p><strong>Palabras ordenadas (Z-A):</strong> {informacion.palabrasOrdenadasZA}</p>
          </div>
        )}
      </main>
    </div>
  );
}
