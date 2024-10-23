import Logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="flex-col gap-6 sm:gap-0 justify-center text-center sm:flex-row flex sm:justify-between p-6">
      <h1 className="text-[#0db75f] text-[24px] justify-center sm:justify-normal transition duration-700 ease-in-out hover:text-[#0db75fb6] font-bold cursor-pointer flex gap-4 items-center">
        <img
          src={Logo}
          alt="Logo"
          className="transition duration-700 ease-in-out hover:scale-125 w-[48px]"
        />
        <a href="./">Facundo</a>
      </h1>
      <ul className="justify-center sm:justify-normal flex gap-6 font-semibold items-center">
        <a
          href="#presentacion"
          className="transition duration-700 ease-in-out hover:text-[#0db75fb6]"
        >
          <li>Presentación</li>
        </a>
        <a
          href="#proyectos"
          className="transition duration-700 ease-in-out hover:text-[#0db75fb6]"
        >
          <li>Proyectos</li>
        </a>
        <a
          href="#contacto"
          className="transition duration-700 ease-in-out hover:text-[#0db75fb6]"
        >
          <li>Contacto</li>
        </a>
      </ul>
      <a
        href="#"
        className="transition duration-700 ease-in-out scale-75 hover:scale-100 rounded-3xl border-[1px] p-3 border-[#0db75f] font-semibold"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default Navbar;
