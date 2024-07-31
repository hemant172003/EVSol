import React from "react";

const Contact = () => {
  // Get the URL for the background image
  const backgroundImage = process.env.PUBLIC_URL + './contact.jpeg';

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Left Section - Company Details */}
      <div className="flex-1 max-w-md md:max-w-4xl mx-4 p-8 bg-white bg-opacity-50 rounded-lg shadow-lg mb-8 md:mb-0 md:mr-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="mb-4">
          <p className="font-semibold">Ev Sol PVT LTD.</p>
          <p>Alpha 2, Greater Noida, Uttar Pradesh, India</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Phone</p>
          <p>+91 88699-948046</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Email</p>
          <p>amankvish@gmail.com</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">About Us</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sed felis et odio congue rhoncus.
          </p>
        </div>
        {/* Social Media Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            Facebook
          </button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            Twitter
          </button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
            Instagram
          </button>
        </div>
      </div>
      
      {/* Right Section - Contact Form */}
      <div className="flex-1 max-w-md mx-4 p-8 bg-white bg-opacity-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md p-2"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
