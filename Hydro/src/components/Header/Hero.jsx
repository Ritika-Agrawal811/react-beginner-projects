const Hero = () => {
  return (
    <section className="bg-home flex items-center justify-center py-8 md:py-0 px-3 ">
      <div className=" w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="my-8 md:my-0 md:w-1/2 flex flex-col justify-center text-white">
          <h1 className="text-center md:text-left text-3xl sm:text-4xl lg:text-5xl lg:leading-normal">
            We make beautiful <br />
            websites for all people
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-8 items-center justify-center md:justify-start">
            <a
              className="w-72 text-center sm:w-80 md:w-auto text-base md:text-sm lg:text-base border-2 border-white duration-300 hover:border-red-600 hover:bg-red-600 px-3 md:px-6 py-3 rounded-full"
              href="#"
            >
              Start a project
            </a>
            <p className="text-sm md:text-base">
              CALL US (+66) 010-020-0340 <br />
              for any enquiry
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/AqcjdkPMPJA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
