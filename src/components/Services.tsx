import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";

const Services = () => {
  return (
    <div>
      <section
        className="flex flex-col h-screen px-10 bg-center bg-cover bg-blend-overlay text-white bg-black/50"
        style={{ backgroundImage: `url(${background2})` }}
      >
        <div className="text-3xl font-medium pt-16">
          Smarter Harvests, Greater Yields
        </div>
        <div className="md:w-[60%] lg:w-[48%] pt-[30%] space-y-3">
          <p className="text-xl font-medium">
            Transforming Farming for a Sustainable Tomorrow with Innovative AGV
            Robotics Solutions
          </p>
          <button className="px-6 py-2 text-black bg-lime-400 rounded-full hover:bg-black/60">
            Learn more
          </button>
        </div>
      </section>

      <section
        className="flex flex-col h-screen px-10 bg-center bg-cover bg-blend-overlay text-white bg-black/50"
        style={{ backgroundImage: `url(${background3})` }}
      >
        <div className="text-3xl font-medium pt-16">
          Smarter Harvests, Greater Yields
        </div>
        <div className="md:w-[60%] lg:w-[48%] pt-[30%] space-y-3">
          <p className="text-xl font-medium">
            Transforming Farming for a Sustainable Tomorrow with Innovative AGV
            Robotics Solutions
          </p>
          <button className="px-6 py-2 text-black bg-lime-400 rounded-full hover:bg-black/60">
            Learn more
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
