import RevealOnScroll from "./RevealOnScroll";

const products = [
  {
    id: 1,
    name: "Lista de tareas",
    href: "https://facundotm.github.io/ListaDeTareas/",
    imageSrc: "https://i.imgur.com/87zK76o.jpeg",
    imageAlt: "Listado de tareas logo.",
    desc: "Pagina web que guardará todas las notas que desees. Creado con React y LocalStorage.",
  },
  {
    id: 2,
    name: "Sistema de turnos (CRUD)",
    href: "https://turnos-lh9a.onrender.com/",
    imageSrc: "https://i.imgur.com/yTDjHYQ.jpeg",
    imageAlt: "Logo sistema de turnos",
    desc: "Una aplicación para gestionar turnos de un lavadero. Se utilizó React, Express, MongoDB, Tailwind.",
  },
  {
    id: 3,
    name: "Aplicación de clima",
    href: "https://frontweather-0i41.onrender.com/",
    imageSrc: "https://i.imgur.com/XTJMShW.jpeg",
    imageAlt: "Logo app clima",
    desc: "Sistema para ver el clima de determinada ciudad. Se utilizó React para el FrontEnd y Express para el backend.",
  },

  // More products...
];

export default function Projects() {
  return (
    <div id="proyectos" className="bg-white mt-32">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <RevealOnScroll>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Proyectos
          </h2>
        </RevealOnScroll>

        <div className="delay-[300ms] duration-[600ms] mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <RevealOnScroll key={product.id}>
              <div className="group relative">
                <div className="transition duration-700 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
