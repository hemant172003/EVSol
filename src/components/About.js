import React from "react";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-blue py-20 px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About Electric Vehicles
          </h1>
          <p className="text-lg">
            Learn about the benefits, advantages, and policies surrounding
            electric vehicles.
          </p>
        </div>
        {/* Background Image Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Pics/Charging-infra.jpg)`,
            opacity: 0.5, // Adjust opacity as needed
          }}
        />
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Benefits of Electric Vehicles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit Cards */}
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-green-500">
                Environmental Friendly
              </h3>
              <p className="text-gray-600">
                Electric vehicles produce zero tailpipe emissions, reducing air
                pollution and greenhouse gas emissions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-green-500">
                Lower Operating Costs
              </h3>
              <p className="text-gray-600">
                Electricity is cheaper than gasoline, resulting in lower fuel
                costs for electric vehicle owners.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-green-500">
                Performance and Efficiency
              </h3>
              <p className="text-gray-600">
                Electric motors provide instant torque, offering smooth
                acceleration and a quieter driving experience.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-green-500">
                Reduced Maintenance
              </h3>
              <p className="text-gray-600">
                Electric vehicles have fewer moving parts compared to internal
                combustion engine vehicles, resulting in lower maintenance
                costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Advantages of Electric Vehicles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Advantage Cards */}
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-500">
                Energy Efficiency
              </h3>
              <p className="text-gray-600">
                Electric vehicles convert more of the energy from the grid into
                power at the wheels compared to internal combustion engine
                vehicles.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-500">
                Convenience of Charging
              </h3>
              <p className="text-gray-600">
                Electric vehicle owners can charge their vehicles at home using
                a standard power outlet or at public charging stations.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-500">
                Quiet Operation
              </h3>
              <p className="text-gray-600">
                Electric vehicles produce less noise pollution compared to
                traditional vehicles, providing a quieter driving experience.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-500">
                Government Incentives
              </h3>
              <p className="text-gray-600">
                Many governments offer incentives such as tax credits and
                rebates to encourage the adoption of electric vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="min-h-screen">
        <div className="video-container">
          <video className="video-element" autoPlay muted loop>
            <source src="Pics/intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Policies Supporting Electric Vehicles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Policy Cards */}
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-purple-500">
                EV Incentives
              </h3>
              <p className="text-gray-600">
                Many governments offer incentives such as tax credits and
                rebates to encourage the adoption of electric vehicles.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-purple-500">
                Charging Infrastructure
              </h3>
              <p className="text-gray-600">
                Government investment in charging infrastructure is essential to
                support the widespread adoption of electric vehicles.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-purple-500">
                Emission Standards
              </h3>
              <p className="text-gray-600">
                Stringent emission standards encourage automakers to produce
                more electric vehicles and reduce pollution from traditional
                vehicles.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-purple-500">
                Research and Development
              </h3>
              <p className="text-gray-600">
                Government funding for research and development in battery
                technology and electric vehicle manufacturing drives innovation
                in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EV Charging Stations */}
      <section className="bg-blue-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            EV Charging Stations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Charging Stations */}
            {/* Station 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <img
                src="https://source.unsplash.com/featured/?delhi-ev-station"
                alt="Charging Station 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Charging Station 1
                </h3>
                <p className="text-gray-600 mb-2">Location: New Delhi</p>
                <p className="text-gray-600 mb-2">
                  Government Policy: Incentives for Private Charging Station
                  Installations
                </p>
                <p className="text-gray-600">
                  Private Sector Policy: Collaboration with Businesses for
                  Charging Infrastructure
                </p>
              </div>
            </div>

            {/* Station 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <img
                src="https://source.unsplash.com/featured/?electric-vehicle"
                alt="Charging Station 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Charging Station 2
                </h3>
                <p className="text-gray-600 mb-2">Location: Mumbai</p>
                <p className="text-gray-600 mb-2">
                  Government Policy: Subsidies for EV Charging Infrastructure
                  Setup
                </p>
                <p className="text-gray-600">
                  Private Sector Policy: Investment in Fast Charging Technology
                </p>
              </div>
            </div>

            {/* Station 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <img
                src="https://source.unsplash.com/featured/?ev-station"
                alt="Charging Station 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Charging Station 3
                </h3>
                <p className="text-gray-600 mb-2">Location: Bengaluru</p>
                <p className="text-gray-600 mb-2">
                  Government Policy: Mandate for EV Charging Points in
                  Commercial Buildings
                </p>
                <p className="text-gray-600">
                  Private Sector Policy: Partnership with Real Estate Developers
                  for Charging Stations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
