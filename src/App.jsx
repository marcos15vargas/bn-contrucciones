import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import  Home  from "./pages/home/Home"
import  Jobs  from "./pages/Jobs/Jobs"
import  Services  from "./pages/Services/Services"
import  AboutUs  from "./pages/AboutUs/AboutUs"
import  Contact  from "./pages/Contact/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route path="/" element={ <Home/> }/>
            <Route path="/jobs" element={ <Jobs/> }/>
            <Route path="/services" element={ <Services /> }/>
            <Route path="/aboutus" element={ <AboutUs/> }/>
            <Route path="/contact" element={ <Contact/> }/>
          </Route>
        </Routes>
      </HashRouter>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
