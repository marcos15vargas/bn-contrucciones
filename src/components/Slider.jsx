import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slider } from "../constants";

export const Slider = () => {
  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
    margin: "10px",
  };
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </button>
    ),
  };
  return (
    <div className=" my-4 max-w-7xl m-auto">
      <Slide {...properties}>
        {slider.map((item, index) => (
          <div key={index} className="">
            <div
              className="flex items-center justify-center bg-cover h-[450px]"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className="p-[20px] text-xl text-center bg-white">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
