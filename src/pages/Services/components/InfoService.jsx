import { services } from "../../../constants";

const InfoService = () => {
  return (
    <section className="body-font text-black">
      <div className="max-w-7xl px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/4 w-full mb-6 lg:mb-0 ">
            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 underline decoration-azul">
              Servicios
            </h1>
          </div>
          <p className="lg:w-3/4 w-full leading-relaxed text-xl text-stone-800">
          En <strong>BN Construcciones</strong>, ofrecemos una gama completa de servicios para satisfacer todas tus necesidades de construcción y renovación. Nuestro equipo de profesionales está comprometido con la calidad y la eficiencia en cada proyecto.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((item, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-white shadow-2xl bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={item.image}
                  alt="content"
                />
                <h2 className="text-2xl text-azul font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-stone-800 leading-relaxed text-base ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoService;
