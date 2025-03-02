import Hero from "../../components/Hero"
import Stats from "../../components/Stats"
import Info from "./components/Info"
// import Team from "./components/Team"
import Team2 from "./components/Team2"
import ScrollToTop from "../../components/ScrollToTop"

import image from  "../../assets/heroSections/about.webp";

const AboutUs = () => {
  return (
    <section id="about">
      <ScrollToTop />
      <Hero title="Sobre Nosotros" image={image}/>
      <Info/>
      {/* <Team/> */}
      <Team2/>
      <Stats/>
    </section>
  )
}

export default AboutUs