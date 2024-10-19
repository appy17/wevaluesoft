import React, { useState } from 'react'; 
import { TfiDribbble } from "react-icons/tfi";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    // Animation variants
    const navVariant = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
    };

    return (
        <motion.header 
            className='w-full bg-[#040E1A] text-white py-4 px-4 sticky top-0 z-50'
            initial={{ y: -100 }} 
            animate={{ y: 0 }} 
            transition={{ type: 'spring', stiffness: 50 }}
        >
            <div className='max-w-[1145px] mx-auto'>
                <div className='container mx-auto flex items-center justify-between'>
                    <div className='text-2xl font-bold'>
                        <Link to="/" className='text-[#00B3C3]'>
                            <span className='text-white'>W</span>EVALUESOFT
                        </Link>
                    </div>

                    <div className='md:hidden' onClick={toggleNav}>
                        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>

                    <motion.nav className='hidden md:flex space-x-8'>
                        <Link to="/technology" className='hover:text-[#00B3C3] text-[#00B3C3] underline underline-offset-[10px] pb-1 active:text-[#00B3C3]'>Technology</Link>
                        <Link to="/service" className='hover:text-[#00B3C3] hover:underline hover:underline-offset-[10px] pb-1 active:text-[#00B3C3]'>Service</Link>
                        <Link to="/portfolio" className='hover:text-[#00B3C3] hover:underline hover:underline-offset-[10px] pb-1 active:text-[#00B3C3]'>Portfolio</Link>
                        <Link to="/about" className='hover:text-[#00B3C3] hover:underline hover:underline-offset-[10px] pb-1 active:text-[#00B3C3]'>About Us</Link>
                        <Link to="/contact" className='hover:text-[#00B3C3] hover:underline hover:underline-offset-[10px] pb-1 active:text-[#00B3C3]'>Contact Us</Link>
                    </motion.nav>

                    <TfiDribbble className='hidden md:block' />
                </div>

                {navOpen && (
                    <motion.nav 
                        className='md:hidden flex flex-col space-y-4 mt-4'
                        variants={navVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Link to="/technology" className='hover:text-gray-400'>Technology</Link>
                        <Link to="/service" className='hover:text-gray-400'>Service</Link>
                        <Link to="/portfolio" className='hover:text-gray-400'>Portfolio</Link>
                        <Link to="/about" className='hover:text-gray-400'>About Us</Link>
                        <Link to="/contact" className='hover:text-gray-400'>Contact Us</Link>
                    </motion.nav>
                )}
            </div>
        </motion.header>
    );
}

export default Header;
