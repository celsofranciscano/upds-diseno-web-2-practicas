"use client";
import { useState } from "react";

export default function ArrayAnalyzer() {
  const valores = [true, 5, false, "hola", "adios", 2];
  const [textComparison, setTextComparison] = useState("");
  const [booleanResults, setBooleanResults] = useState({ trueResult: "", falseResult: "" });
  const [mathResults, setMathResults] = useState({
    suma: "",
    resta: "",
    multiplicacion: "",
    division: "",
    modulo: ""
  });

  // Función para realizar la comparación y cálculos cuando se hace clic en el botón
  const analyzeArray = () => {
    // Comparación de los elementos de texto
    const textoMayor = valores[3].length > valores[4].length ? valores[3] : valores[4];
    setTextComparison(`El texto mayor es: "${textoMayor}"`);

    // Operaciones booleanas
    const trueResult = valores[0] || valores[2];  // OR: para obtener true
    const falseResult = valores[0] && valores[2]; // AND: para obtener false
    setBooleanResults({
      trueResult: `Resultado TRUE: (${valores[0]} || ${valores[2]}) = ${trueResult}`,
      falseResult: `Resultado FALSE: (${valores[0]} && ${valores[2]}) = ${falseResult}`
    });

    // Operaciones matemáticas
    const suma = valores[1] + valores[5];
    const resta = valores[1] - valores[5];
    const multiplicacion = valores[1] * valores[5];
    const division = valores[1] / valores[5];
    const modulo = valores[1] % valores[5];
    setMathResults({
      suma: `Suma: ${valores[1]} + ${valores[5]} = ${suma}`,
      resta: `Resta: ${valores[1]} - ${valores[5]} = ${resta}`,
      multiplicacion: `Multiplicación: ${valores[1]} * ${valores[5]} = ${multiplicacion}`,
      division: `División: ${valores[1]} / ${valores[5]} = ${division}`,
      modulo: `Módulo: ${valores[1]} % ${valores[5]} = ${modulo}`
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-6 p-6 border border-zinc-800 rounded-md w-full max-w-md shadow-lg">

      <pre className="p-4 bg-zinc-800 text-zinc-400 rounded border border-zinc-700">
          {JSON.stringify(valores, null, 2)}
        </pre>
         
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
          Análisis del Array
        </h1>

        {/* Botón de análisis */}
        <button
          onClick={analyzeArray}
          className="bg-indigo-500 px-5 py-2 rounded-md shadow hover:bg-indigo-600 text-white font-semibold transition-colors duration-200"
        >
          Analizar Array
        </button>

        {/* Resultado de la comparación de textos */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-zinc-400">Comparación de Textos:</h2>
          <p className="p-2 border border-zinc-700 rounded text-zinc-500">
            {textComparison || "Presiona 'Analizar Array' para ver el resultado."}
          </p>
        </div>

        {/* Resultados de operaciones booleanas */}
        <div>
          <h2 className="text-lg font-semibold text-zinc-400">Operaciones Booleanas:</h2>
          <p className="p-2 border border-zinc-700 rounded text-zinc-500">
            {booleanResults.trueResult || "Resultado TRUE no disponible"}
          </p>
          <p className="p-2 border border-zinc-700 rounded text-zinc-500 mt-2">
            {booleanResults.falseResult || "Resultado FALSE no disponible"}
          </p>
        </div>

        {/* Resultados de operaciones matemáticas */}
        <div>
          <h2 className="text-lg font-semibold text-zinc-400">Operaciones Matemáticas:</h2>
          <ul className="space-y-2">
            {Object.values(mathResults).map((result, index) => (
              <li key={index} className="p-2 border border-zinc-700 rounded text-zinc-500">
                {result || "Resultado matemático no disponible"}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
