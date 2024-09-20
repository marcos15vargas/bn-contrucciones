import { team } from "../../../constants";

const Team2 = () => {
  return (
    <section className="text-gray-600 body-font max-w-6xl m-auto">
      <div className="container px-5 py-12 mx-auto">
        {/* titulo */}
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="text-3xl font-medium title-font mb-4 text-gray-900 underline decoration-azul">
            Nuestro Equipo
          </h2>
        </div>
        <div className="flex flex-wrap -m-4 ">
          {team.map((item, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2 m-auto">
              <div className="h-full flex flex-col items-center text-center">
                <div className="overflow-hidden w-full mb-4">
                  <img
                    alt="team"
                    className="m-auto flex-shrink-0 w-56 h-56 object-cover object-center  hover:scale-105 transition-all duration-300"
                    src={item.image}
                  />
                </div>
                <div className="w-full">
                  <h2 className="title-font font-bold text-lg text-gray-900">
                    {item.name}
                  </h2>
                  <h3 className="text-gray-600 mb-3">{item.role}</h3>
                </div>
              </div>
            </div>
          ))}
          
        </div>{/* fin */}
      </div>
    </section>
  );
};

export default Team2;
