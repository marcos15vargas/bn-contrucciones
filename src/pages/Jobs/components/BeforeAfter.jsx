import imageBefore from "../../../assets/beforeAfter/despues.webp";
import imageAfter from "../../../assets/beforeAfter/Antes_v1.webp";

const BeforeAfter = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl border-2 border-red-600">
        <h2 className="text-4xl py-2 font-bold text-black underline decoration-azul">
          Antes y Despues
        </h2>
        <div className="bebore-after p-4 flex">
          <div className="diff aspect-[3/2] max-w-xl h-[500px]">
            <div className="diff-item-1">
              <img alt="daisy" src={imageBefore} />
            </div>
            <div className="diff-item-2">
              <img alt="daisy" src={imageAfter} />
            </div>
            <div className="diff-resizer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
