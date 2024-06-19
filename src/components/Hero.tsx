import Header from "./Header";
import background1 from "../assets/background1.jpg";

const Hero = () => {
  return (
    <section
      className="flex flex-col h-screen px-10 bg-center bg-cover bg-blend-overlay text-white bg-black/50"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <Header />

      <div className="absolute md:w-[60%] lg:w-[48%] bottom-20 space-y-3">
        <div className="text-5xl font-medium">
          Smarter Harvests, Greater Yields
        </div>
        <p className="text-lg">
          Transforming Farming for a Sustainable Tomorrow with Innovative AGV
          Robotics Solutions
        </p>
        <button className="px-6 py-2 text-black bg-lime-400 rounded-full hover:bg-black/60">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
