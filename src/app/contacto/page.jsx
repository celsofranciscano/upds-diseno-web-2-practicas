function ContactoPage() {
  return (
    <main className="">
      {/* Banner */}
      <section className="relative bg-fondo bg-cover bg-center text-white h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-rose-950 bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold drop-shadow-md">Contáctanos</h1>
          <p className="mt-4 text-lg max-w-2xl font-medium">
            ¿Tienes alguna pregunta o necesitas más información?
          </p>
        </div>
      </section>

      <div className="mt-4 py-12 px-4 md:px-16">
        {/* Sección de información de contacto */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 ">
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex items-center justify-center flex-col">
            <svg
              class="w-6 h-6 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
              />
            </svg>

            <h2 className="text-2xl font-semibold text-gray-800">Teléfono</h2>
            <p className="text-gray-600 mt-2">+591 123 456 789</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex items-center justify-center flex-col">
            <svg
              class="w-6 h-6 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>

            <h2 className="text-2xl font-semibold text-gray-800">
              Correo Electrónico
            </h2>
            <p className="text-gray-600 mt-2">info@tuempresa.com</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center flex items-center justify-center flex-col">
            <svg
              class="w-6 h-6 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
              />
            </svg>

            <h2 className="text-2xl font-semibold text-gray-800">Dirección</h2>
            <p className="text-gray-600 mt-2">
              Calle Ejemplo #123, Ciudad, País
            </p>
          </div>
        </section>

        {/* Formulario de contacto */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Envíanos un Mensaje
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-rose-600"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-rose-600"
                  placeholder="Tu correo electrónico"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Mensaje</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-rose-600"
                rows="6"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-rose-600 text-white font-semibold rounded-lg py-3 hover:bg-rose-500 transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </section>

        {/* Mapa */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Encuéntranos Aquí
          </h2>
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.48483162469498!2d-66.15646356012293!3d-17.38765245925234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37408feb0cd81%3A0xe93001c5ee9fe527!2sAsarti!5e0!3m2!1ses!2sbo!4v1732893310503!5m2!1ses!2sbo"
              width="100%"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ContactoPage;
