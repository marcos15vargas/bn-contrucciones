import Modal from "./Modal";
import { jobs } from "../../../constants/index";

const Modals = () => {
  return (
    <section className="max-w-6xl mx-auto my-8">
      <h1 className="text-4xl py-2 font-bold text-black underline decoration-azul">Trabajos</h1>
      <section className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9">
          {jobs.map((item, index) => (
            <Modal key={index} title={item.title} description={item.description} image={item.image} mt2={item.mt2} location={item.location} duration={item.duration} date={item.date} nameModal={item.nameModal} imageModal1={item.imageModal1} imageModal2={item.imageModal2} imageModal3={item.imageModal3} imageModal4={item.imageModal4}/>
          ))}
        </div>
      </section>
    </section>
  );
};


export default Modals;
