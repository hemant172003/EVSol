import React from "react";
import { Carousel } from "@material-tailwind/react";

export function CarouselTransition() {
  return (
    <div>
      <div className="mt-8">
        {/* Add margin-top for padding */}
        <Carousel
          transition={{ duration: 2 }}
          className="rounded-xl"
          autoplay={true} // Enable autoplay transition
          autoplaySpeed={5000} // Set autoplay speed to 5000 milliseconds (5 seconds)
          infinite={true} // Enable continuous flow
        >
          <img
            src={process.env.PUBLIC_URL + "/Pics/ev1.jpg"}
            alt="image 1"
            className="h-full w-full object-cover rounded-xl"
            style={{ maxHeight: "500px" }} // Set the maximum height of the image
          />
          <img
            src={process.env.PUBLIC_URL + "/Pics/ev2.jpg"}
            alt="image 2"
            className="h-full w-full object-cover rounded-xl"
            style={{ maxHeight: "500px" }} // Set the maximum height of the image
          />
          <img
            src={process.env.PUBLIC_URL + "/Pics/ev3.jpg"}
            alt="image 3"
            className="h-full w-full object-cover rounded-xl"
            style={{ maxHeight: "500px" }} // Set the maximum height of the image
          />
        </Carousel>
      </div>

      {/* Cards Section */}

      {/* Key Differences Heading */}
      <h1 className="text-2xl font-bold text-center mt-8 mb-4">
        Key differentiators of Ev Sol
      </h1>

      {/* Information Cards */}

      <div className="flex justify-center">
        {/* Card 1 */}
        <div className="max-w-xs bg-green-200 shadow-lg rounded-lg overflow-hidden mx-2 my-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <img
            className="w-24 h-24 object-cover object-center mx-auto p-1"
            src={`${process.env.PUBLIC_URL}/pics/fast-charging.png`}
            alt="Card 1"
          />
          <div className="p-4 text-center">
            <h2 className="text-gray-900 font-semibold text-lg mb-2">
              Fast charging
            </h2>
            <p className="text-gray-700 text-base">
              All charging stations will have fast chargers for customer
              convenience.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-xs bg-green-200 shadow-lg rounded-lg overflow-hidden mx-2 my-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <img
            className="w-24 h-24 object-cover object-center mx-auto p-1"
            src={`${process.env.PUBLIC_URL}/pics/charge-app.png`}
            alt="Card 2"
          />
          <div className="p-4 text-center">
            <h2 className="text-gray-900 font-semibold text-lg mb-2">
              Ev Charge App
            </h2>
            <p className="text-gray-700 text-base">
              Cashless charging stations will operate through the Jio-bp Pulse
              Charge App.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-xs bg-green-200 shadow-lg rounded-lg overflow-hidden mx-2 my-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <img
            className="w-24 h-24 object-cover object-center mx-auto p-1"
            src={`${process.env.PUBLIC_URL}/pics/fluid-payment.png`}
            alt="Card 3"
          />
          <div className="p-4 text-center">
            <h2 className="text-gray-900 font-semibold text-lg mb-2">
              Fluid payment options
            </h2>
            <p className="text-gray-700 text-base">
              All modes of payment – Net banking, Credit card, Debit card, UPI
              or Wallet are accepted.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="max-w-xs bg-green-200 shadow-lg rounded-lg overflow-hidden mx-2 my-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <img
            className="w-24 h-24 object-cover object-center mx-auto p-1"
            src={`${process.env.PUBLIC_URL}/pics/take-break.png`}
            alt="Card 4"
          />
          <div className="p-4 text-center">
            <h2 className="text-gray-900 font-semibold text-lg mb-2">
              Take a break
            </h2>
            <p className="text-gray-700 text-base">
              The charging stations will include the Wild Bean Café for a quick
              personal recharge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
