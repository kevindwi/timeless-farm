import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";

const Services = () => {
  return (
    <div>
      <section
        className="relative flex flex-col h-screen px-6 sm:px-10 bg-center bg-cover bg-blend-overlay text-white bg-black/50"
        style={{ backgroundImage: `url(${background2})` }}
      >
        <div className="text-3xl font-medium pt-16">Sistem Irigasi Cerdas</div>
        <div className="absolute bottom-16 pr-10 md:w-[60%] lg:w-[48%]">
          <p className="text-xl font-medium">
            Inovasi irigasi yang hemat energi dan memberikan suplai air optimal
            untuk tanaman.
          </p>
          <button className="px-6 py-2 mt-3 text-black bg-lime-400 rounded-full hover:bg-lime-600">
            Pelajari lebih
          </button>
        </div>
      </section>

      <section
        className="relative flex flex-col h-screen px-6 sm:px-10 bg-center bg-cover bg-blend-overlay text-white bg-black/50"
        style={{ backgroundImage: `url(${background3})` }}
      >
        <div className="text-3xl font-medium pt-16">Teknologi Hidroponik</div>
        <div className="absolute bottom-16 pr-10 md:w-[60%] lg:w-[48%]">
          <p className="text-xl font-medium">
            Solusi lengkap untuk budidaya tanaman tanpa tanah yang hemat air dan
            ramah lingkungan.
          </p>
          <button className="px-6 py-2 mt-3 text-black bg-lime-400 rounded-full hover:bg-lime-600">
            Pelajari lebih
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
