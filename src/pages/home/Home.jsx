import Banner from "./components/Banner";
import Features from "./components/Features";
import Proyects from "./components/Proyects";
import Gallery from "./components/Gallery";
import Stats from "../../components/Stats";
import Testimonial from "./components/Testimonial";



const Home = () => {
  return (
    <main className="text-black">
      <Banner />
      <Stats />
      <Features />
      <Proyects />
      <Testimonial />
      <Gallery />
    </main>
  )
}

export default Home