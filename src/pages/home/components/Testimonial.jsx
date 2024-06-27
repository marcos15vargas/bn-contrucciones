import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { testimonial } from "../../../constants/index";

export const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    slides: {
      origin: "center",
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 2.5,
          spacing: 32,
        },
      },
    },
  });

  return (
    <section className="navigation-wrapper mx-auto max-w-7xl">
      <div className="px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight underline decoration-azul sm:text-5xl">
            Testimonios
          </h2>

          {/* botones */}
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              onClick={() => instanceRef.current?.prev()}
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-azul p-3 text-azul transition hover:bg-azul hover:text-white"
            >
              <Arrow left>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </Arrow>
            </button>

            <button
              onClick={() => instanceRef.current?.next()}
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-azul p-3 text-azul transition hover:bg-azul hover:text-white"
            >
              <Arrow>
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </Arrow>
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {/* cards */}
            {testimonial.map((testimonial, index) => (
              <div
                key={index}
                className={`keen-slider__slide number-slide${index + 1}`}
              >
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex items-center gap-4">
                      <img
                        alt=""
                        src={testimonial.image}
                        className="size-14 rounded-full object-cover"
                      />
                      <p className="text-2xl font-bold text-azul sm:text-2xl">
                        {testimonial.title}
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="mt-4 leading-relaxed text-gray-700">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-md font-medium text-gray-700 sm:mt-6">
                    &mdash; {testimonial.name}
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="dots w-3">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
function Arrow({ disabled, left, onClick }) {
  const disablede = disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={onClick}
      className={`arrow size-5 rtl:rotate-180  ${
        left ? "arrow--left" : "arrow--right"
      } ${disablede}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="currentColor"
    >
      {left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

export default Testimonial;
