import Hero from "../../components/Hero";
import BeforeAfter from "./components/BeforeAfter";
import Modals from "./components/Modals";
import ScrollToTop from "../../components/ScrollToTop";

import image from  "../../assets/heroSections/jobs.webp";

const Jobs = () => {
  return (
    <>
      <ScrollToTop />
      <Hero title="Nuestros Trabajos" image={image} />
      <Modals/>
      <BeforeAfter/>
    </>
  );
};

export default Jobs;
