function QuienesSomosPage() {
    return (
      <main className="">
        {/* Banner */}
        <section className="relative bg-fondo bg-cover bg-center text-white h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-rose-950 bg-opacity-50"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold drop-shadow-md">Quiénes Somos</h1>
            <p className="mt-4 text-lg max-w-2xl font-medium">
              Descubre nuestra historia y cómo fusionamos tradición y moda en cada uno de nuestros productos.
            </p>
          </div>
        </section>
  
        {/* Sección de Misión, Visión y Valores */}
        <section className="py-12 px-4 md:px-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Nuestra Historia</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Somos una empresa dedicada a la creación de ropa y accesorios que combinan la moda moderna con las tradiciones culturales bolivianas, especialmente con los detalles únicos de aguayo. Nuestra misión es ofrecer productos auténticos, cómodos y con un fuerte componente cultural que resalte las raíces de nuestra tierra.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Misión */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Misión</h3>
                <p className="text-gray-600">
                  Nuestra misión es ofrecer productos de alta calidad que fusionen lo moderno con lo tradicional, brindando a nuestros clientes una experiencia única y auténtica.
                </p>
              </div>
  
              {/* Visión */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Visión</h3>
                <p className="text-gray-600">
                  Ser reconocidos a nivel nacional e internacional por la excelencia de nuestros productos, preservando y promoviendo nuestra cultura a través de la moda.
                </p>
              </div>
  
              {/* Valores */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Valores</h3>
                <p className="text-gray-600">
                  Compromiso, calidad, tradición y responsabilidad social. Nos guiamos por estos valores en cada una de nuestras creaciones y decisiones.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Sección de Nuestro Equipo */}
        <section className="py-12 px-4 md:px-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Conoce a Nuestro Equipo</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Un equipo apasionado que trabaja día a día para ofrecerte lo mejor de la moda con tradición.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                  src="/images/equipo-1.jpg"
                  alt="Miembro del equipo"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-bold text-gray-800">Juan Pérez</h4>
                <p className="text-gray-600">Fundador y Director Creativo</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                  src="/images/equipo-2.jpg"
                  alt="Miembro del equipo"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-bold text-gray-800">Ana Sánchez</h4>
                <p className="text-gray-600">Diseñadora de Moda</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                  src="/images/equipo-3.jpg"
                  alt="Miembro del equipo"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-bold text-gray-800">Carlos Rodríguez</h4>
                <p className="text-gray-600">Director de Marketing</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default QuienesSomosPage;
  