"use client";
import { useState } from "react";

export default function EventosMouseTeclado() {
  // Estado para almacenar las posiciones del puntero y el tipo de evento
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eventInfo, setEventInfo] = useState("Mueve el ratón o presiona una tecla.");
  const [backgroundColor, setBackgroundColor] = useState("white");

  // Función para manejar el movimiento del ratón
  const handleMouseMove = (e) => {
    const { clientX, clientY, pageX, pageY } = e;
    setMousePosition({ x: clientX, y: clientY });
    setEventInfo(`Posición del ratón: (x: ${clientX}, y: ${clientY})\nPosición en la página: (x: ${pageX}, y: ${pageY})`);
    setBackgroundColor("white"); // Vuelve al color blanco cuando se mueve el ratón
  };

  // Función para manejar el evento de teclado
  const handleKeyPress = (e) => {
    setEventInfo(`Tecla presionada: ${e.key}`);
    setBackgroundColor("#CCE6FF"); // Cambia el fondo a azul cuando se presiona una tecla
  };

  // Función para manejar los clics del ratón
  const handleMouseDown = () => {
    setBackgroundColor("#FFFFCC"); // Cambia el fondo a amarillo cuando se hace clic
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      onMouseMove={handleMouseMove} // Captura el movimiento del ratón
      onMouseDown={handleMouseDown} // Captura el clic del ratón
      onKeyDown={handleKeyPress} // Captura el evento de teclado
      tabIndex={0} // Necesario para que el componente reciba eventos de teclado
    >
      <main className="flex flex-col gap-6 p-6 border border-zinc-800 rounded-md w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">Eventos del Ratón y Teclado</h1>

        {/* Cuadro de mensaje donde se muestra la información */}
        <div
          className="p-4 border border-zinc-700 rounded-md text-zinc-500"
          style={{ backgroundColor }}
        >
          <pre>{eventInfo}</pre>
        </div>

        {/* Instrucciones */}
        <div className="mt-6 text-zinc-600">
          <p>
            1. Mueve el ratón para ver la posición del puntero en relación con el navegador y la página.
          </p>
          <p>2. Presiona cualquier tecla para ver el código de la tecla presionada.</p>
          <p>3. El color de fondo cambiará dependiendo del tipo de evento: amarillo para clic y azul para teclado.</p>
        </div>
      </main>
    </div>
  );
}
