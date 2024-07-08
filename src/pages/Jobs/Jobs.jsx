import Hero from "../../components/Hero";
import BeforeAfter from "./components/BeforeAfter";
import Modals from "./components/Modals";

const image = "https://cdn.pixabay.com/photo/2024/04/05/05/17/business-8676529_640.jpg";

const Jobs = () => {
  return (
    <>
      <Hero title="Nuestros Trabajos" image={image} />
      <Modals/>
      <BeforeAfter/>
    </>
  );
};

export default Jobs;
