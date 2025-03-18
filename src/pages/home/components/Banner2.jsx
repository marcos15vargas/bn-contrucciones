import { banner } from "../../../constants/index";
import imgBanner from "../../../assets/banner2.webp";
import Logo from "../../../assets/Logo";
// import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <div className="md:h-[90vh]">
      <section className="grid grid-cols-1 gap-0 bg-opacity-25  md:grid-cols-2 h-full">
        <div className="flex flex-col items-start justify-center px-4 py-16 lg:px-20 md:h-[65%]">
          <div className="w-56 m-auto mb-12">
            <Logo className="size-12" color={"#023355"} />
          </div>
          <div className="flex flex-wrap my-4 max-w-2xl m-auto">
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
            {/* <Link to="/contact" className="inline-block rounded bg-azul px-7 py-3 text-lg font-bold text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-azul/75">Contactanos</Link> */}
            <a href="https://wa.me/2645633714" className="inline-block rounded bg-azul px-7 py-3 text-lg font-bold text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-azul/75">Contactanos</a>
          </div>
        </div>
        <div className="md:h-[65%]">
          <img
            src={imgBanner}
            alt="Hombre en una construccion"
            className="object-cover w-full md:h-full"
            // className="object-cover w-full h-64 md:h-full"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner2;
