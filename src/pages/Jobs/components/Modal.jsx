import PropTypes from "prop-types";

const Modal = ({image , title , description, mt2, location, date, duration , nameModal, imageModal1, imageModal2, imageModal3, imageModal4}) => {
  return (
    <div className="size-80 bg-gray-300 ">
            <button
              className="relative size-80 overflow-hidden h-full w-full bg-black "
              onClick={() => document.getElementById(`${nameModal}`).showModal()}
            >
              <img
                className="object-cover w-full h-full opacity-65 "
                src={image}
                alt=""
              />
              <h3 className="absolute w-full text-white text-xl font-bold z-10 bottom-4 left-1/2 transform -translate-x-1/2">
                {title}
              </h3>
            </button>
            <dialog id={`${nameModal}`} className="modal">
              <div className="modal-box bg-fondo text-stone-800">
                <h3 className="font-bold text-2xl underline decoration-azul">
                  {title}
                </h3>
                <p className="py-4">
                  {description}
                </p>
                <div className="mb-4">
                  <ull>
                    <li><strong>Metros Cuadrados: </strong>{mt2}</li>
                    <li><strong>Fecha: </strong>{date}</li>
                    <li><strong>Duración: </strong>{duration}</li>
                    <li><strong>Ubicación: </strong>{location}</li>
                  </ull>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="max-w-56 h-40">
                    <img
                      className="object-cover w-full h-full"
                      src={imageModal1}
                      alt=""
                    />
                  </div>
                  <div className="max-w-56 h-40">
                    <img
                      className="object-cover w-full h-full"
                      src={imageModal2}
                      alt=""
                    />
                  </div>
                  <div className="max-w-56 h-40">
                    <img
                      className="object-cover w-full h-full"
                      src={imageModal3}
                      alt=""
                    />
                  </div>
                  <div className="max-w-56 h-40">
                    <img
                      className="object-cover w-full h-full"
                      src={imageModal4}
                      alt=""
                    />
                  </div>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn bg-azul text-white">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
  )
}

Modal.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  mt2: PropTypes.string,
  location: PropTypes.string,
  date: PropTypes.string,
  duration: PropTypes.string,
  nameModal: PropTypes.string,
  imageModal1: PropTypes.string,
  imageModal2: PropTypes.string,
  imageModal3: PropTypes.string,
  imageModal4: PropTypes.string
}

export default Modal