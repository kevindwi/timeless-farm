import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col px-10 bg-white gap-10 py-20">
      <div className="text-4xl font-medium">Mengapa Harus Memilih Kami</div>

      <div className="grid grid-rows-1 sm:grid-cols-4 gap-8 sm:gap-4">
        <div className="flex flex-col gap-2 w-[280px]">
          <h4 className="text-xl font-medium">Ahli di Bidangnya</h4>
          <p className="text-normal text-gray-800">
            Tim kami terdiri dari para profesional berpengalaman di bidang
            agrikultur dan teknologi.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-[280px]">
          <h4 className="text-xl font-medium">Inovasi Terdepan</h4>
          <p className="text-normal text-gray-800">
            Kami menggunakan teknologi terkini untuk membantu petani
            meningkatkan produktivitas.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-[280px]">
          <h4 className="text-xl font-medium">Pendekatan Berkelanjutan</h4>
          <p className="text-normal text-gray-800">
            Solusi kami dirancang untuk menjaga kelestarian lingkungan sambil
            meningkatkan hasil panen.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-[280px]">
          <h4 className="text-xl font-medium">Layanan Personal</h4>
          <p className="text-normal text-gray-800">
            Kami mendampingi setiap langkah Anda, mulai dari perencanaan hingga
            implementasi, untuk memastikan kesuksesan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
