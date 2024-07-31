// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import statement
import Header from './screens/Header';
import Footer from './screens/Footer';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import logo from "./logo.svg"; // Additional import
import "./App.css"; // Additional import

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Home />} /> {/* Use element prop instead of component prop */}
          <Route path="/about" element={<About />} /> {/* Use element prop instead of component prop */}
          <Route path="/contact" element={<Contact />} /> {/* Use element prop instead of component prop */}
        </Routes> {/* Replace Switch with Routes */}
      </main>
      <Footer />
    </Router>
  );
};

export default App;
