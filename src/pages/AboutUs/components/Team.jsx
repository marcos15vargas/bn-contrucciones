const Team = () => {
  return (
    // terminar seccion
    //falta hacerlo responsive
    <section className="max-w-6xl m-auto">
      <div className="grid grid-cols-4 grid-rows-8 lg:grid-cols-8 lg:grid-rows-5 gap-4 ">
        <div className="col-span-2 row-span-2 size-64 overflow-hidden relative">
            <img className="w-full object-cover brightness-[0.65] hover:scale-105 transition-all" src="https://cdn.pixabay.com/photo/2015/06/11/11/39/businessman-805769_1280.jpg" alt="" />
            <h4 className="absolute text-white text-lg font-bold z-10 bottom-8 left-1/2 transform -translate-x-1/2">Jhon Doe</h4>
            <h4 className="absolute text-white text-xl font-bold z-10 bottom-2 left-1/2 transform -translate-x-1/2">Presidente</h4>
        </div>
        <div className="col-span-2 row-span-2 size-64 border col-start-3 overflow-hidden relative">
            <img className="w-full object-cover brightness-[0.65] hover:scale-105 transition-all" src="https://cdn.pixabay.com/photo/2015/06/11/11/39/businessman-805769_1280.jpg" alt="" />
            <h4 className="absolute text-white text-lg font-bold z-10 bottom-8 left-1/2 transform -translate-x-1/2">Jhon Doe</h4>
            <h4 className="absolute text-white text-xl font-bold z-10 bottom-2 left-1/2 transform -translate-x-1/2">Presidente</h4>
        </div>
        <div className="col-span-2 row-span-2 size-64 border col-start-5">3</div>
        <div className="col-span-2 row-span-2 size-64 border col-start-7">4</div>
        <div className="col-span-2 row-span-2 size-64 border row-start-3">5</div>
        <div className="col-span-2 row-span-2 size-64 border col-start-3 row-start-3">6</div>
        <div className="col-span-2 row-span-2 size-64 border col-start-5 row-start-3">7</div>
        <div className="col-span-2 row-span-2 size-64 border col-start-7 row-start-3">8</div>
      </div>
    </section>
  );
};

export default Team;
