const Work = () => {
  return (
    <section className="py-14 px-3 lg:px-0 max-w-6xl mx-auto">
      <header className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Our Work
        </h2>
        <div className="flex justify-center gap-2 mt-2 md:mt-4">
          <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-300"></span>
          <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-300"></span>
          <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-300"></span>
        </div>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-8 gap-6 ">
        <figure className="w-full">
          <img
            className="rounded-md"
            src="./media/work-image1.jpg"
            alt="Work Image 1"
          />
        </figure>
        <figure className="w-full">
          <img
            className="rounded-md"
            src="./media/work-image2.jpg"
            alt="Work Image 1"
          />
        </figure>
        <figure className="w-full">
          <img
            className="rounded-md"
            src="./media/work-image3.jpg"
            alt="Work Image 1"
          />
        </figure>
        <figure className="w-full">
          <img
            className="rounded-md"
            src="./media/work-image4.jpg"
            alt="Work Image 1"
          />
        </figure>
      </div>
    </section>
  );
};

export default Work;
