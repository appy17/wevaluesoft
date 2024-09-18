import React, { useState } from 'react';
import { TfiDribbble } from "react-icons/tfi";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className='w-full bg-[#040E1A] text-white py-4 px-4'>
            <div className='max-w-[1145px] mx-auto'>
                <div className='container mx-auto flex items-center justify-between'>
                    <div className='text-2xl font-bold'>
                        <a href="/" className='text-[#00B3C3]'><span className='text-white'>W</span>EVALUESOFT</a>
                    </div>

                    <div className='md:hidden' onClick={toggleNav}>
                        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>

                    <nav className='hidden md:flex space-x-8'>
                        <a href="#" className='hover:text-[#00B3C3] text-[#00B3C3] underline underline-offset-[10px] pb-1 active:text-[#00B3C3]'>Technology</a>
                        <a href="#" className='hover:text-[#00B3C3] hover:underline hover:underline-offset-[10px] pb-1 active:text-[#00B3C3]'>Service</a>
                        <a href="#" className='hover:text-[#00B3C3] hover:underline hover:underline-offset-[10px] pb-1 active:text-[#00B3C3]'>Portfolio</a>
                        <a href="#" className='hover:text-[#00B3C3] hover:underline hover:underline-offset-[10px] pb-1 active:text-[#00B3C3]'>About Us</a>
                        <a href="#" className='hover:text-[#00B3C3] hover:underline hover:underline-offset-[10px] pb-1 active:text-[#00B3C3]'>Contact Us</a>
                    </nav>

                    <TfiDribbble className='hidden md:block' />
                </div>

                {navOpen && (
                    <nav className='md:hidden flex flex-col space-y-4 mt-4'>
                        <a href="/" className='hover:text-gray-400'>Technology</a>
                        <a href="/about" className='hover:text-gray-400'>Service</a>
                        <a href="/blog" className='hover:text-gray-400'>Portfolio</a>
                        <a href="/about" className='hover:text-gray-400'>About Us</a>
                        <a href="/contact" className='hover:text-gray-400'>Contact Us</a>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;
