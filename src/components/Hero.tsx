import Header from "./Header";
import { Link } from "react-scroll";

import background1 from "../assets/background1.jpg";

const Hero = () => {
  return (
    <section
      className="flex flex-col h-screen px-10 bg-center bg-cover bg-blend-overlay text-white bg-black/50"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <Header />

      <div className="absolute w-[80%] md:w-[60%] lg:w-[48%] bottom-24 sm:bottom-20 space-y-3">
        <div className="text-4xl sm:text-5xl font-medium">
          Solusi Bertani Masa Depan
        </div>
        <p className="text-lg pb-5">
          Inovasi teknologi pertanian untuk masa depan yang berkelanjutan.
        </p>
        <Link smooth={true} duration={500} to="about">
          <button className="px-6 py-2 text-black bg-lime-400 rounded-full hover:bg-lime-600">
            Tentang Kami
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
