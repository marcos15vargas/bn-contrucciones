import { Banner } from "./components/Banner";
import { Features } from "./components/Features";
import { Navbar } from "./components/Navbar";
import { Proyects } from "./components/Proyects";
// import { Slider } from "./components/Slider";
import { Testimonial } from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <Proyects />
      {/* <Slider /> */}
      <Testimonial/>
    </>
  );
}

export default App;
