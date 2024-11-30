import React from "react";

const About = () => {
  return (
    <section className="flex flex-col px-10 bg-white">
      <div className="block float-left whitespace-nowrap sm:flex sm:justify-between py-5 overflow-x-auto">
        <div className="text-xl font-medium inline-block mr-8">
          Teknologi Hidroponik
        </div>
        <div className="text-xl font-medium inline-block mr-8">
          Irigasi Cerdas
        </div>
        <div className="text-xl font-medium inline-block mr-8">
          Konsultasi dan Pelatihan
        </div>
      </div>

      <p className="text-3xl py-28 sm:py-36">
        Kami adalah perusahaan yang berdedikasi untuk meningkatkan kesejahteraan
        petani melalui solusi teknologi pertanian modern. Fokus utama kami
        adalah memberikan solusi hidroponik, pemupukan yang efisien, dan sistem
        irigasi cerdas yang dirancang untuk memaksimalkan hasil panen sekaligus
        mengurangi biaya operasional.
        <br />
        <br />
        Dengan pengalaman bertahun-tahun di bidang pertanian dan teknologi, kami
        berkomitmen untuk menjadi mitra terbaik bagi petani dalam menghadapi
        tantangan agrikultur di era modern.
      </p>
    </section>
  );
};

export default About;
