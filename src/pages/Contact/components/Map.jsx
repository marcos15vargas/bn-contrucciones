const Map = () => {
  return (
    <>
      <div className="max-w-6xl m-auto flex justify-center">
        <div className="my-8 border-4 rounded-lg overflow-hidden border-azul">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d545.6622056584986!2d-68.58201099620617!3d-31.58816125112774!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1720046820711!5m2!1ses!2sar"
            width="800"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
          />
        </div>
      </div>
    </>
  );
};

export default Map;
