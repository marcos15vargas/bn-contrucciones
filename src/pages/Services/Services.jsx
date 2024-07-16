import Hero from "../../components/Hero"
import InfoService from "./components/InfoService"

const image = "https://cdn.pixabay.com/photo/2024/04/05/05/17/business-8676529_640.jpg"
const Services = () => {
  return (
    <>
      <Hero title="Servicios" image={image} />
      <InfoService/>
    </>
  )
}

export default Services