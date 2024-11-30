import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col px-10 text-white bg-black gap-10 pt-16 pb-5">
      <div className="grid grid-rows-1 sm:grid-cols-2">
        <h1 className="text-5xl font-semibold">Timeless</h1>

        <div className="grid grid-cols-3 gap-x-8 sm:gap-x-32 mt-8 sm:mt-0">
          <div className="bg-transparent">
            <ul className="flex flex-col gap-5">
              <li className="active hover:text-white">
                <a href="#">Home</a>
              </li>
              <li className="text-zinc-200 hover:text-white">
                <a href="#">About</a>
              </li>
              <li className="text-zinc-200 hover:text-white">
                <a href="#">Services</a>
              </li>
              <li className="text-zinc-200 hover:text-white">
                <a href="#">Careers</a>
              </li>
              <li className="text-zinc-200 hover:text-white">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="bg-transparent">
            <ul className="flex flex-col gap-5">
              <li className="active hover:text-white">
                <a href="#">Home</a>
              </li>
              <li className="text-zinc-200 hover:text-white">
                <a href="#">About</a>
              </li>
              <li className="text-zinc-200 hover:text-white">
                <a href="#">Services</a>
              </li>
              <li className="text-zinc-200 hover:text-white">
                <a href="#">Careers</a>
              </li>
              <li className="text-zinc-200 hover:text-white">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="bg-transparent">
            <ul className="flex flex-col gap-5">
              <li className="active hover:text-white">
                <a href="#">Home</a>
              </li>
              <li className="text-zinc-200 hover:text-white">
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <hr className="h-px border-0 bg-zinc-800" />
        <span>@2024 Timeless. All rights reserved</span>
      </div>
    </section>
  );
};

export default Footer;
