'use client'
function Button() {
  return (
    <button
      className="mt-8 px-4 py-2 bg-rose-700 text-white rounded-full hover:bg-rose-600"
      onClick={() => (window.location.href = "https://wa.me/67483231")}
    >
      Hacer el pedido
    </button>
  );
}

export default Button;
