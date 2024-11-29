

import Link from "next/link";
function TiendaPage() {
    const productos = [
      { id: 1, nombre: "Chaqueta Aguayo Exclusiva", descripcion: "Una chaqueta moderna con detalles de aguayo tradicional, perfecta para cualquier ocasión.", precio: "120 Bs.", imagen: "/images/uno.webp" },
      { id: 2, nombre: "Bolso Aguayo Artesanal", descripcion: "Bolso práctico y resistente con un diseño único inspirado en los Andes.", precio: "80 Bs.", imagen: "/images/dos.webp" },
      { id: 3, nombre: "Sombrero Andino de Aguayo", descripcion: "Combina tradición y moda con este sombrero único.", precio: "100 Bs.", imagen: "/images/tres.webp" },
      { id: 4, nombre: "Bufanda Multicolor", descripcion: "Bufanda tejida a mano con patrones de aguayo vibrantes.", precio: "60 Bs.", imagen: "/images/cuatro.webp" },
      { id: 5, nombre: "Zapatos Aguayo Edition", descripcion: "Zapatos cómodos con un toque de estilo boliviano.", precio: "150 Bs.", imagen: "/images/cinco.webp" },
      { id: 6, nombre: "Suéter de Lana Andina", descripcion: "Suéter de lana de alpaca con detalles de aguayo, ideal para el clima frío.", precio: "180 Bs.", imagen: "/images/seis.webp" },
      { id: 7, nombre: "Pantalón de Tela de Aguayo", descripcion: "Pantalón de tela ligera con detalles de aguayo, cómodo y moderno.", precio: "90 Bs.", imagen: "/images/siete.webp" },
      { id: 8, nombre: "Falda Tradicional Andina", descripcion: "Falda larga con bordado de aguayo, perfecta para ocasiones especiales.", precio: "140 Bs.", imagen: "/images/ocho.webp" },
      { id: 9, nombre: "Chaleco de Aguayo", descripcion: "Chaleco hecho a mano con detalles de aguayo, elegante y único.", precio: "110 Bs.", imagen: "/images/nueve.webp" },
      { id: 10, nombre: "Mochila de Cuero y Aguayo", descripcion: "Mochila resistente y de diseño único, perfecta para el día a día.", precio: "130 Bs.", imagen: "/images/diez.webp" },
      { id: 11, nombre: "Guantes de Lana Andina", descripcion: "Guantes tejidos a mano con lana andina, perfectos para el invierno.", precio: "50 Bs.", imagen: "/images/once.webp" },
      { id: 12, nombre: "Poncho Andino de Aguayo", descripcion: "Poncho de lana con detalles de aguayo, elegante y cálido.", precio: "160 Bs.", imagen: "/images/doce.webp" }
    ];
  
    return (
      <main className="">
        {/* Banner */}
        <section className="relative bg-fondo bg-cover bg-center text-white h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-rose-950 bg-opacity-50"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold drop-shadow-md">Nuestra Tienda</h1>
            <p className="mt-4 text-lg max-w-2xl font-medium">
              Encuentra productos únicos que fusionan moda moderna y tradición boliviana.
            </p>
          </div>
        </section>
  
        {/* Sección de Productos */}
        <section className="py-12 px-4 md:px-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Explora Nuestros Productos</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Cada prenda está diseñada con amor y detalle para brindarte lo mejor de nuestra herencia cultural.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {productos.map((producto) => (
                <div key={producto.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-96 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">{producto.nombre}</h3>
                    <p className="text-gray-600 mt-2">{producto.descripcion}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-rose-700 font-bold text-lg">{producto.precio}</span>
                      <Link href={`/tienda/${producto.id}`} className="px-4 py-2 bg-rose-700 text-white rounded-full hover:bg-rose-600">
                        Ver Detalle
                      </Link>
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
  
  export default TiendaPage;
  