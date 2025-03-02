import Hero from "../../components/Hero";
// import Map from "./components/Map";
// import Form1 from "./components/Form1";
import Options from "./components/Options";
import ScrollToTop from "../../components/ScrollToTop";

const image = "../../assets/heroSections/contact.webp";

const Contact = () => {
  return (
    <>
      <ScrollToTop />
      <Hero
        title="Contacto"
        image={image}
      />
      {/* <Form1 /> */}
      <Options/>
      {/* <Map/> */}
    </>
  );
};

export default Contact;
