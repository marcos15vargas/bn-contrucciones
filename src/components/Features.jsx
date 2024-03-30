import { features } from "../constants";

export const Features = () => {
  return (
    <section className="">
      <div className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold sm:text-4xl underline decoration-azul">
            Especializaciones
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="shrink-0 rounded-full bg-azul p-4 text-white">
                {item.icon}
              </span>
              <div>
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="mt-1 text-sm text-justify">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
