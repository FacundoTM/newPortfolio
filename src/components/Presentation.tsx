import Github from "../images/github.svg";
import Linkedin from "../images/linkedin.svg";
import Email from "../images/email.svg";

const Presentation = () => {
  return (
    <div className="flex justify-center pt-10 h-[600px] items-center text-center">
      <div className="flex flex-col gap-3 items-center">
        <h1 id="presentacion" className="text-[64px] font-semibold ">
          Hola, soy{" "}
          <small className="text-[64px] text-[#0db75f]"> Facundo</small>
        </h1>
        <p className="text-[16px] font-medium text-[#707884] w-3/4">
          Soy un desarrollador web con experiencia en la creación de
          aplicaciones modernas y eficientes utilizando tecnologías como React,
          Express, Tailwind CSS y MongoDB. Me especializo en construir
          interfaces de usuario intuitivas y dinámicas, junto con backends
          robustos que optimizan el rendimiento y la escalabilidad.
        </p>
        <ul className="text-[#707884] w-[120px] gap-2 grid grid-cols-3">
          <a href="#">
            <li>
              <img
                className="transition duration-700 ease-in-out hover:opacity-50"
                src={Github}
              />
            </li>
          </a>
          <a href="#">
            <li>
              <img
                className="transition duration-700 ease-in-out hover:opacity-50"
                src={Linkedin}
              />
            </li>
          </a>
          <a href="#">
            <li>
              <img
                className="transition duration-700 ease-in-out hover:opacity-50"
                src={Email}
              />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Presentation;
