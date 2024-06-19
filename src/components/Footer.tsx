import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col px-10 text-white bg-black gap-10 pt-16 pb-5">
      <div className="grid grid-cols-2">
        <h1 className="text-5xl font-semibold">Rofarm</h1>

        <div className="grid grid-cols-3 gap-32">
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

      <div className="grid grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-2xl font-medium">
            Ready to start a conversation?
            <br /> Get in touch with us now.
          </h3>
          <button className="px-6 py-2 text-black bg-lime-400 rounded-full hover:bg-black/60">
            Contact Us
          </button>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-medium">
            Ready to join our community?
            <br /> Subscribe to our newsletter now.
          </h3>
          <div className="space-x-3">
            <input
              className="px-6 py-2 text-white bg-zinc-800 border border-zinc-600 rounded-full hover:bg-zinc-900"
              type="text"
              placeholder="Your Email"
            />
            <button className="px-6 py-2 text-black bg-lime-400 rounded-full hover:bg-black/60">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <hr className="h-px border-0 bg-zinc-800" />
        <span>@2024 Rofarm. All rights reserved</span>
      </div>
    </section>
  );
};

export default Footer;
