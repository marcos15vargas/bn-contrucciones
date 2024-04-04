import { Banner } from "./components/Banner";
import { Features } from "./components/Features";
import { Navbar } from "./components/Navbar";
import { Proyects } from "./components/Proyects";
import { Slider } from "./components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <Proyects />
      <Slider />
    </>
  );
}

export default App;
