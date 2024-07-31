import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 rounded-lg shadow m-4 text-white">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-sm">
          Ⓒ Designed and Developed by{" "}
          <a
            className="underline hover:after:w-full"
            href="https://www.linkedin.com/in/amankvish/"
            target="_blank"
            rel="noreferrer"
          >
            <b>Aman K Vish</b>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
