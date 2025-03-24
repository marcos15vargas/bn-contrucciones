import image1 from "../../../assets/proyects/5.webp";
import image2 from "../../../assets/proyects/6.webp";
import image3 from "../../../assets/proyects/7.webp";
import image4 from "../../../assets/proyects/8.webp";
import image5 from "../../../assets/proyects/10.webp";
import image6 from "../../../assets/proyects/2.webp";


export const Gallery = () => {
  return (
    <section className="body-font">
      <div className=" max-w-7xl container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-10 flex-wrap">
          <h3 className="sm:text-4xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 underline decoration-azul">
            Galeria de Nuestros Trabajos
          </h3>
          {/* <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them man bun deep jianbing selfies heirloom.
          </p> */}
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-full sm:w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <div className="overflow-hidden">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-105 transition-all"
                  src={image1}
                />
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <div className="overflow-hidden">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-105 transition-all"
                  src={image3}
                />
              </div>
            </div>
            <div className="md:p-2 p-1 w-full overflow-hidden">
              <div className="overflow-hidden">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:scale-105 transition-all"
                  src={image5}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full sm:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <div className="overflow-hidden">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:scale-105 transition-all"
                  src={image4}
                />
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <div className="overflow-hidden">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-105 transition-all"
                  src={image2}
                />
              </div>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <div className="overflow-hidden">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-105 transition-all"
                  src={image6}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;