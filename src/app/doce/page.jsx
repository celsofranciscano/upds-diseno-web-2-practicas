"use client";
import { useState } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    direccion: "",
    edad: "",
    fechaNacimiento: "",
    sexo: "",
    email: "",
    telefono: "",
    ciudad: "",
  });

  const [errores, setErrores] = useState({});

  // Manejo de los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validación del formulario
  const validarFormulario = () => {
    let errores = {};
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexTelefono = /^[0-9]{10}$/; // Validación de teléfono con 10 dígitos
    const edadMinima = 18;

    // Validación de los campos
    if (!formData.nombre) errores.nombre = "El nombre es obligatorio.";
    if (!formData.apellidoPaterno) errores.apellidoPaterno = "El apellido paterno es obligatorio.";
    if (!formData.apellidoMaterno) errores.apellidoMaterno = "El apellido materno es obligatorio.";
    if (!formData.direccion) errores.direccion = "La dirección es obligatoria.";
    if (!formData.edad || formData.edad < edadMinima) errores.edad = "Debes tener al menos 18 años.";
    if (!formData.fechaNacimiento) errores.fechaNacimiento = "La fecha de nacimiento es obligatoria.";
    if (!formData.sexo) errores.sexo = "El sexo es obligatorio.";
    if (!formData.email || !regexEmail.test(formData.email)) errores.email = "El email no es válido.";
    if (!formData.telefono || !regexTelefono.test(formData.telefono)) errores.telefono = "El teléfono debe tener 10 dígitos.";
    if (!formData.ciudad) errores.ciudad = "La ciudad es obligatoria.";

    return errores;
  };

  // Función para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validarFormulario();
    setErrores(errores);

    if (Object.keys(errores).length === 0) {
      alert("Formulario enviado correctamente");
      // Aquí podrías hacer algo con los datos del formulario, como enviarlos a un servidor
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col gap-6 p-6 border border-zinc-800 rounded-md w-full max-w-md shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">Formulario de Registro</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold text-zinc-700 mb-1">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-2 border bg-zinc-800 border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errores.nombre && <p className="text-red-500 text-sm">{errores.nombre}</p>}
          </div>

          {/* Apellido Paterno */}
          <div>
            <label htmlFor="apellidoPaterno" className="block text-sm font-semibold text-zinc-700 mb-1">Apellido Paterno:</label>
            <input
              type="text"
              id="apellidoPaterno"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
              className="w-full p-2 border bg-zinc-800 border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errores.apellidoPaterno && <p className="text-red-500 text-sm">{errores.apellidoPaterno}</p>}
          </div>

          {/* Apellido Materno */}
          <div>
            <label htmlFor="apellidoMaterno" className="block text-sm font-semibold text-zinc-700 mb-1">Apellido Materno:</label>
            <input
              type="text"
              id="apellidoMaterno"
              name="apellidoMaterno"
              value={formData.apellidoMaterno}
              onChange={handleChange}
              className="w-full p-2 border bg-zinc-800 border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errores.apellidoMaterno && <p className="text-red-500 text-sm">{errores.apellidoMaterno}</p>}
          </div>

          {/* Dirección */}
          <div>
            <label htmlFor="direccion" className="block text-sm font-semibold text-zinc-700 mb-1">Dirección:</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="w-full p-2 border bg-zinc-800 border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errores.direccion && <p className="text-red-500 text-sm">{errores.direccion}</p>}
          </div>

          {/* Edad */}
          <div>
            <label htmlFor="edad" className="block text-sm font-semibold text-zinc-700 mb-1">Edad:</label>
            <input
              type="number"
              id="edad"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              className="w-full p-2 border bg-zinc-800 border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errores.edad && <p className="text-red-500 text-sm">{errores.edad}</p>}
          </div>

          {/* Fecha de nacimiento */}
          <div>
            <label htmlFor="fechaNacimiento" className="block text-sm font-semibold text-zinc-700 mb-1">Fecha de Nacimiento:</label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              className="w-full p-2 border bg-zinc-800 border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errores.fechaNacimiento && <p className="text-red-500 text-sm">{errores.fechaNacimiento}</p>}
          </div>

          {/* Sexo */}
          <div>
            <label htmlFor="sexo" className="block text-sm font-semibold text-zinc-700 mb-1">Sexo:</label>
            <select
              id="sexo"
              name="sexo"
              value={formData.sexo}
              onChange={handleChange}
              className="w-full p-2 border bg-zinc-800 border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Selecciona tu sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
            {errores.sexo && <p className="text-red-500 text-sm">{errores.sexo}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border bg-zinc-800 border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errores.email && <p className="text-red-500 text-sm">{errores.email}</p>}
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-semibold text-zinc-700 mb-1">Teléfono:</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full p-2 border bg-zinc-800 border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errores.telefono && <p className="text-red-500 text-sm">{errores.telefono}</p>}
          </div>

          {/* Ciudad */}
          <div>
            <label htmlFor="ciudad" className="block text-sm font-semibold text-zinc-700 mb-1">Ciudad:</label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className="w-full p-2 border bg-zinc-800 border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errores.ciudad && <p className="text-red-500 text-sm">{errores.ciudad}</p>}
          </div>

          {/* Botón de enviar */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
