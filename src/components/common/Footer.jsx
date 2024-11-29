function Footer() {
  return (
    <footer className="bg-rose-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div className=" flex items-center justify-center flex-col">
            <a className="flex gap-1 items-center" href="/dashboard">
              <svg
                className="w-10"
                viewBox="0 0 448 621"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M287.399 275.676C317.558 250.731 330.922 103.315 343.977 50.3249C357.033 -2.6648 411.027 0.0227954 411.027 0.0227954C411.027 0.0227954 397.009 24.4176 402.727 42.6222C408.444 60.8267 447.612 77.0994 447.612 77.0994L439.165 99.3704C439.165 99.3704 421.524 97.114 411.027 118.112C400.53 139.109 424.177 344.885 424.177 344.885C424.177 344.885 354.684 471.46 354.684 524C354.684 576.539 379.552 620.572 379.552 620.572H344.655C344.655 620.572 293.462 559.65 282.963 529.203C272.464 498.757 276.662 468.31 276.662 468.31C276.662 468.31 221.017 465.161 171.674 468.31C122.331 471.46 89.4239 513.876 83.4849 537.603C77.5459 561.329 75.0859 620.572 75.0859 620.572H47.4931C30.6987 568.744 17.3603 550.169 24.5963 524C44.6393 451.512 40.7023 410.399 36.0616 392.088C31.4209 373.776 0 357.794 0 357.794C15.3916 326.436 31.1027 311.368 98.6838 309.796C166.265 308.225 257.239 300.62 287.399 275.676Z"
                  fill="#EC4815"
                />
                <path
                  d="M106.714 520.964C106.714 520.964 113.844 586.948 151.724 620.573H184.186C151.724 583.798 148.184 487.941 148.184 487.941C131.673 493.317 108.814 512.565 106.714 520.964Z"
                  fill="#EC4815"
                />
              </svg>
              <span className="text-2xl font-medium ">Pachakuna</span>
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-rose-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/tienda" className="hover:text-rose-300">
                  Tienda
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-rose-300">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/quienes" className="hover:text-rose-300">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-rose-300"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-rose-300"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-rose-300"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-rose-300"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clip-rule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Sección de derechos de autor */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Pachakuna de Ropa Aguayo. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
