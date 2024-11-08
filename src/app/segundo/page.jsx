import React, { useState } from 'react';

const Factorial = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);

  const calculateFactorial = (n) => {
    if (n < 0) return "El factorial de un número negativo no está definido";
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  };

  const handleCalculate = () => {
    setResult(calculateFactorial(number));
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setNumber(isNaN(value) ? 0 : value);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Calculadora de Factorial</h2>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        placeholder="Ingrese un número"
      />
      <button
        onClick={handleCalculate}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Calcular
      </button>
      <p className="mt-4 text-lg font-bold">
        Resultado: {result}
      </p>
    </div>
  );
};

export default Factorial;
