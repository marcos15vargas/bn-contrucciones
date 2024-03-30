import { Phone } from "lucide-react";
import { banner } from "../constants";

export const Banner = () => {
  return (
    <div>
      <section className="grid grid-cols-1 gap-0 bg-opacity-25 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-4xl xl:text-5xl text-center m-auto">
            Construye la casa <br />
            <span className="text-azul">De Tus Sueños</span>
          </h1>
          <div className="flex flex-wrap my-4">
            {banner.map((banner, index) => (
              <div
                key={index}
                className="w-full sm:w-1/1 xl:w-1/2 flex items-center"
              >
                <div className="size-2 mx-2 mb-4 text-green-500">
                  {banner.icon}
                </div>
                <div className="p-2 mx-5 text-2xl ">
                  <p className="">{banner.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="m-auto mt-4">
            <a
              className="inline-block rounded bg-azul px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-azul/75 mx-1 sm:mx-2"
              href="#"
            >
              CONTACTO
            </a>

            <a
              className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-azul focus:outline-none focus:ring active:text-indigo-500 mx-1 sm:mx-2"
              href="#"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <Phone className="size-5 rtl:rotate-180" />
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4">
                {" "}
                WhatsApp{" "}
              </span>
            </a>
          </div>
        </div>
        <div>
          <img
            src="assets/banner.webp"
            alt="Hombre en una construccion"
            className="object-cover w-full h-64 md:h-full"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};
