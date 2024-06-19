import { Banner } from "./components/Banner";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { Navbar } from "./components/Navbar";
import { Proyects } from "./components/Proyects";
import { Stats } from "./components/Stats";
// import { Slider } from "./components/Slider";
import { Testimonial } from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <Features />
      <Proyects />
      {/* <Slider /> */}
      <Testimonial/>
      <Gallery/>
    </>
  );
}

export default App;
