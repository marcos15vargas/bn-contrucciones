import { stats } from "../constants";

export const Stats = () => {
  return (
    <section className="body-font">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-wrap -m-4 text-center justify-center items-center">
          {/* stats */}
          {stats.map((item, index) => (
            <div
              key={index}
              className="md:w-1/5 sm:w-1/2 mx-2 my-4"
            >
              <div className="w-32 h-32 border-4 border-gray-800 mx-auto rounded-full flex flex-col justify-center items-center text-center p-4">
                {/* <span className="text-azul mb-3 inline-block">{item.icon}</span> */}
                <h2 className="title-font font-medium text-2xl text-green-500">{item.number}</h2>
                <p className="leading-relaxed text-xs font-bold text-azul">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
