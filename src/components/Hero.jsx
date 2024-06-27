

// eslint-disable-next-line react/prop-types
const Hero = ( {title, image} ) => {
  return (
    <div
      className="hero h-[200px]"
      style={{
        backgroundImage:`url(${image})`
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl lg:text-5xl  font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
