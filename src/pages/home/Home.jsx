// import Banner from "./components/Banner";
import Features from "./components/Features";
import Proyects from "./components/Proyects";
import Gallery from "./components/Gallery";
import Stats from "../../components/Stats";
import Testimonial from "./components/Testimonial";
import Banner2 from "./components/Banner2";



const Home = () => {
  return (
    <main className="text-black">
      {/* <Banner /> */}
      <Banner2 />
      <Stats />
      <Features />
      <Proyects />
      <Testimonial />
      <Gallery />
    </main>
  )
}

export default Home