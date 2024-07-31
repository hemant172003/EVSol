import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* First section */}
      <section className="overflow-hidden bg-gray-900 rounded-lg sm:grid sm:grid-cols-2 sm:items-center dark:bg-gray-900 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        {/* Left side content */}
        <div className="p-6 md:p-8 lg:px-10 lg:py-14 text-gray-50">
          <div className="max-w-xl mx-auto text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-50 md:text-3xl">
              Promoting adoption of EVs in Delhi
            </h2>
            <p className="text-gray-300 mt-4">
              We are committed to fulfill each of the promises towards a successful implementation of the EV policy. Delhi now has over one lakh electric vehicles, and the citizens of Delhi have responded well to the Policy as the adoption has increased multi-fold.
            </p>
          </div>
        </div>

        {/* Right side image */}
        <div className="h-80 sm:h-auto sm:w-full sm:rounded-lg md:h-96 md:w-full md:border-4 border-gray-800 ml-2 md:ml-0">
          <img
            alt=""
            src="https://ev.delhi.gov.in/files/SwitchDelhi_2.jpg"
            className="h-full w-full object-cover transition duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </section>

      {/* Second section */}
      <section className="overflow-hidden bg-gray-50 rounded-lg sm:grid sm:grid-cols-2 sm:items-center dark:bg-gray-100 mt-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        {/* Left side image */}
        <div className="h-80 sm:h-auto sm:w-full sm:rounded-lg md:h-96 md:w-full md:border-4 border-gray-300 mr-2 md:mr-0">
          <img
            alt=""
            src="https://ev.delhi.gov.in/assets/switch_delhi/images/Charging-station-carousel.jpeg"
            className="h-full w-full object-cover transition duration-500 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Right side content */}
        <div className="p-6 md:p-8 lg:px-10 lg:py-14 text-gray-900">
          <div className="max-w-xl mx-auto text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Making Delhi the EV capital of India
            </h2>
            <p className="text-gray-600 mt-4">
              The Delhi EV Policy is one of the better policies among those announced around the world, targeted to curb air pollution. We also aim to boost the economy of Delhi after a setback due to coronavirus. This policy will give a strong impetus to the economy of the city.
            </p>
          </div>
        </div>
      </section>

      {/* Third section - Quick Reading Blog */}
      <section className="bg-blue-100 py-2 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Reading Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog 1 */}
            <div className="bg-white rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img src="https://ev.delhi.gov.in/files/2-wheelers.jpeg" alt="Electric Vehicle" className="w-full h-auto rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Importance of Electric Vehicles</h3>
                <p className="text-gray-600 mb-4">
                  Electric vehicles play a crucial role in reducing carbon emissions and combating climate change. They offer a cleaner and more sustainable alternative to traditional gasoline-powered vehicles.
                </p>
              </div>
            </div>
            
            {/* Blog 2 */}
            <div className="bg-white rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Benefits of Delhi's EV Policy</h3>
                <p className="text-gray-600 mb-4">
                  Delhi's EV policy not only helps in reducing air pollution but also stimulates economic growth by creating opportunities in the electric vehicle sector. It encourages innovation and investment in green technologies.
                </p>
              </div>
              <img src="https://ev.delhi.gov.in/files/istockphoto-1295809694-612x612.jpg" alt="Electric Mobility" className="w-full h-auto rounded-b-lg" />
            </div>
            
            {/* Blog 3 */}
            <div className="bg-white rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img src="https://ev.delhi.gov.in/files/WhatsApp%20Image%202022-08-24%20at%201.52.50%20PM.jpeg" alt="Challenges in EV Adoption" className="w-full h-auto rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Challenges in EV Adoption</h3>
                <p className="text-gray-600 mb-4">
                  Despite their numerous benefits, electric vehicles face challenges such as high initial costs, limited charging infrastructure, and range anxiety. Addressing these challenges is crucial for widespread EV adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
