import background1 from "../assets/background1.jpg";

function Contact() {
  return (
    <section
      className="flex flex-col px-10 bg-center bg-cover bg-blend-overlay text-white bg-black/50"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <div className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-medium">Get In Touch</h2>
        </div>
        <form className="mx-auto mt-8 max-w-xl sm:mt-10">
          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-white"
              >
                Full name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black placeholder:text-gray-400 focus:outline-2 focus:outline-lime-400"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm/6 font-semibold text-white"
              >
                Company
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black placeholder:text-gray-400 focus:outline-2 focus:outline-lime-400"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-white"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black placeholder:text-gray-400 focus:outline-2 focus:outline-lime-400"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-white"
              >
                Phone number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  placeholder="+62123456789"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black placeholder:text-gray-400 focus:outline-2 focus:outline-lime-400"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-white"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-black placeholder:text-gray-400 focus:outline-2 focus:outline-lime-400"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button className="px-6 py-2 w-full text-black bg-lime-400 rounded-full hover:bg-lime-600">
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
