import React from "react";

const About = () => {
  return (
    <section className="flex flex-col px-10 bg-white">
      <div className="flex justify-between py-5">
        <span className="text-xl font-medium">GreenHarvest</span>
        <span className="text-xl font-medium">GreenFarm</span>
        <span className="text-xl font-medium">GreenTech</span>
        <span className="text-xl font-medium">FarmTech</span>
        <span className="text-xl font-medium">FarmFly</span>
        <span className="text-xl font-medium">FarmGarden</span>
      </div>

      <p className="text-3xl py-[15%]">
        We are ona mission to transform modern agriculture through cutting-edge
        technology. We specialize in providing innovative solutions to the
        farming industry, with a primary focus on our state-of-the-art Smart AG
        Robot Picking and Fruit Transportation services.
      </p>
    </section>
  );
};

export default About;
