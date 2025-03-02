import Hero from "../../components/Hero"
import InfoService from "./components/InfoService"
import Security from "./components/Security"
import ScrollToTop from "../../components/ScrollToTop"

import image from  "../../assets/heroSections/services.webp";

const Services = () => {
  return (
    <>
      <ScrollToTop />
      <Hero title="Servicios" image={image} />
      <InfoService/>
      <Security/>
    </>
  )
}

export default Services