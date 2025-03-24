import { Link } from "react-router-dom";
import img1 from "../../../assets/proyects/1.webp";
import img2 from "../../../assets/proyects/2.webp";
import img3 from "../../../assets/proyects/3.webp";
import img4 from "../../../assets/proyects/4.webp";

export const Proyects = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-7xl items-center m-auto my-12">
      <div className="w-full md:w-1/2 p-8 self-center">
        <h3 className="font-bold text-3xl lg:text-4xl underline decoration-azul">
          Nuestros Trabajos
        </h3>
        <p className="my-10">
          Somos una empresa constructora de sólida trayectoria y experiencia,
          con un equipo profesional plenamente comprometido con el cumplimiento
          y capaz de brindar múltiples soluciones en forma rápida, creativa y
          eficaz.
          <br />
          <br />
          Nuestro esfuerzo se refleja en obras, tanto privadas como públicas,
          que mejoran la calidad de vida de las personas y agregan valor a
          nuestros clientes.
        </p>
        <Link to="/jobs" href="#home" className="font-bold text-xl text-azul underline">Ver Mas</Link>
      </div>
      <div className="w-full md:w-1/2">
        <div className="grid grid-cols-4 grid-rows-4 gap-4 p-8 m-auto">
          <div className="col-span-2 row-span-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            {/* 860x519 */}
            <img className="cover" src={img2} alt="" />
          </div>
          <div className="col-span-2 row-span-2 col-start-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img className="object-cover" src={img3} alt="" />
          </div>
          <div className="col-span-2 row-span-2 row-start-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img src={img4} alt="" />
          </div>
          <div className="col-span-2 row-span-2 col-start-3 row-start-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyects;
