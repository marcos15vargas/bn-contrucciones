import Hero from "../../components/Hero"

const image = "https://cdn.pixabay.com/photo/2024/04/05/05/17/business-8676529_640.jpg"


const AboutUs = () => {
  return (
    <section id="about">
      <Hero title="Sobre Nosotros" image={image}/>
    </section>
  )
}

export default AboutUs