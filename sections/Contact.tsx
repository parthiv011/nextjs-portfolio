import ArrowUpRight from "@/public/Icon/arrow-up-right.svg";
import grainImage from "@/public/grain.jpg";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container">
        <div className="relative bg-gradient-to-r from-blue-300 to-indigo-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-bold text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's Connect and
                discuss How I can help you achieve your goals.
              </p>
            </div>
            <div>
              <a href="mailto:parmarparthiv77@gmail.com">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRight className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
