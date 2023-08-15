const About = () => {
  return (
    <section className="py-14 px-3 lg:px-0 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 px-3">
        <div className="w-full lg:w-1/2">
          <header className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Let us introduce
            </h2>
            <div className="flex justify-center lg:justify-start gap-2 mt-2 md:mt-4 md:mx-1">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-300"></span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-300"></span>
              <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-300"></span>
            </div>
          </header>

          <p className="text-gray-500 mt-4 lg:mr-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            ut sequi voluptatibus beatae corporis repellat asperiores fugit
            debitis corrupti nesciunt nam doloribus animi qui illum, recusandae
            nisi neque iusto culpa!
          </p>
          <p className="text-gray-500 mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 mt-8 lg:mt-0">
            <div className="mb-8">
              <div className="flex justify-between text-gray-900 font-bold">
                <h3 className="text-sm">Web Design</h3>
                <p className="text-sm">85%</p>
              </div>
              <div className="w-full h-1.5 bg-gray-300 rounded-full mt-4 relative before:absolute before:h-full before:w-5/6 before:bg-black before:left-0 before:top-0 before:rounded-full"></div>
            </div>
            <div className="mb-8">
              <div className="flex justify-between text-gray-900 font-bold">
                <h3 className="text-sm">Photography</h3>
                <p className="text-sm">90%</p>
              </div>
              <div className="w-full h-1.5 bg-gray-300 rounded-full mt-4 relative before:absolute before:h-full before:w-11/12 before:bg-black before:left-0 before:top-0 before:rounded-full"></div>
            </div>
            <div className="mb-8">
              <div className="flex justify-between text-gray-900 font-bold">
                <h3 className="text-sm">Content Marketing</h3>
                <p className="text-sm">75%</p>
              </div>
              <div className="w-full h-1.5 bg-gray-300 rounded-full mt-4 relative before:absolute before:h-full before:w-3/4 before:bg-black before:left-0 before:top-0 before:rounded-full"></div>
            </div>
            <div className="mb-8">
              <div className="flex justify-between text-gray-900 font-bold">
                <h3 className="text-sm">CMS Admin</h3>
                <p className="text-sm">70%</p>
              </div>
              <div className="w-full h-1.5 bg-gray-300 rounded-full mt-4 relative before:absolute before:h-full before:w-8/12 before:bg-black before:left-0 before:top-0 before:rounded-full"></div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mt-8 lg:mt-0">
            <img
              className="object-cover"
              src="./media/about-image.jpg"
              alt="About Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
