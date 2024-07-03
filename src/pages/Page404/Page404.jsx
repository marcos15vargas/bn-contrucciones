
const Page404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-azul/60">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-[-50px]">
          Ups!
        </p>
        <div className="flex justify-center my-8">
              <a
                className="inline-block rounded bg-azul px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-azul/75"
                href="#"
              >
                Vovler al Inicio
              </a>
            </div>
      </div>
    </div>
  );
};

export default Page404;
