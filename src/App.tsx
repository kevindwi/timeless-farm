import {
  About,
  Contact,
  Footer,
  Hero,
  Services,
  WhyChooseUs,
} from "./components";

import { Element } from "react-scroll";

function App() {
  return (
    <div className="">
      <Hero />
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="whychooseus">
        <WhyChooseUs />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
