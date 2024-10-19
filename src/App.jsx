import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Technology from './pages/Technology';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './components/Contact';

import Hero from './components/Hero'
import Products from './components/Products'
import Workwithus from './components/Workwithus'
import Footer from './components/Footer/Footer'
import TechnologyProduct from './components/TechnologyProduct'

function App() {
  return (
    <>
      <div className='bg-[#040E1A]'>
      <Router>
            <div>
                <Header />
                <div className="transition-all duration-500 ease-in-out">
                    <Routes>
                         <Route path="/technology" element={<TechnologyProduct/>} />
                        <Route path="/service" element={<Products/>} />
                        <Route path="/portfolio" element={<Workwithus/>} />
                        <Route path="/about" element={<About/>} />
                        <Route path="/contact" element={<Contact/>} />
                        {/* Add more routes here as needed */}
                    </Routes>
                </div>
                <Hero />
                <Products />
                <TechnologyProduct />
                <Workwithus />
                <Contact />
                <Footer/>            
            </div>
        </Router>
      </div>
    </>
  )
}

export default App
