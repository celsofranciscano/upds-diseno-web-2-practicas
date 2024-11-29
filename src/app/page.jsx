function Home() {
  const productos = [
    {
      id: 1,
      nombre: "Chaqueta Aguayo Exclusiva",
      descripcion:
        "Una chaqueta moderna con detalles de aguayo tradicional, perfecta para cualquier ocasión.",
      precio: "120 Bs.",
      imagen: "/images/uno.webp",
    },
    {
      id: 2,
      nombre: "Bolso Aguayo Artesanal",
      descripcion:
        "Bolso práctico y resistente con un diseño único inspirado en los Andes.",
      precio: "80 Bs.",
      imagen: "/images/dos.webp",    },
    {
      id: 3,
      nombre: "Sombrero Andino de Aguayo",
      descripcion: "Combina tradición y moda con este sombrero único.",
      precio: "100 Bs.",
      imagen: "/images/tres.webp",    },
    {
      id: 4,
      nombre: "Bufanda Multicolor",
      descripcion: "Bufanda tejida a mano con patrones de aguayo vibrantes.",
      precio: "60 Bs.",
      imagen: "/images/cuatro.webp",    },
    {
      id: 5,
      nombre: "Polera Aguayo Edition",
      descripcion: "Polera cómodos con un toque de estilo boliviano.",
      precio: "150 Bs.",
      imagen: "/images/cinco.webp",    },
    {
      id: 6,
      nombre: "Polera Aguayo ",
      descripcion: "Polera cómodos con un toque de estilo boliviano.",
      precio: "140 Bs.",
      imagen: "/images/seis.webp",    },
  ];

  return (
    <main className="">
      {/* Banner */}
      <section className="relative bg-fondo bg-cover bg-center text-white h-screen flex items-center justify-center">
     
        <div className="absolute inset-0 bg-rose-950 bg-opacity-50"></div>
  
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold drop-shadow-md">
            Viste con Estilo y Tradición
          </h1>
          <p className="mt-4 text-lg max-w-2xl  font-medium">
            Descubre nuestra colección de prendas únicas con detalles de aguayo,
            hechas con amor y dedicación a nuestras raíces.
          </p>
          <button className="mt-8 px-4 py-2 bg-white text-rose-700 font-semibold rounded-full shadow-lg hover:bg-gray-200">
            Ver Tienda
          </button>
        </div>
      </section>

      {/* Sección de Productos */}
      <section className="py-12  px-4 md:px-16 ">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Descubre Nuestra Colección
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Cada prenda está diseñada para combinar la moda moderna con la rica
            herencia cultural boliviana. ¡Encuentra tu estilo ideal!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white  rounded-lg shadow-md hover:shadow-lg transition duration-300 "
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                  <div className="mt-4 flex justify-center items-center">
                 
                
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
