import React from 'react';

function Hero() {
    return (
        <div className='bg-[#040E1A] w-full p-4'>
            <div className='max-w-[1145px] h-full w-full mx-auto'>
                <div className='p-8 md:p-16 border border-1 flex items-center justify-center w-full border-gray-700 rounded-md h-auto md:h-[600px] relative overflow-hidden'>
                    <span className='outerLineSix'></span>
                    <span className='outerLineFive'></span>
                    <span className='outerLineFour'></span>
                    <span className='outerLineThree'></span>
                    <span className='outerLineTwo'></span>
                    <span className='outerLineOne'></span>
                    <div className='relative text-center homeCotainer'>
                        <svg width="409" height="611" viewBox="0 0 409 611" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse opacity="0.15" cx="359.211" cy="305.719" rx="359.345" ry="304.49" transform="rotate(-5.35876 359.211 305.719)" fill="url(#paint0_radial_34_189)"/>
                            <defs>
                            <radialGradient id="paint0_radial_34_189" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(359.211 305.719) rotate(90) scale(304.49 359.345)">
                            <stop stop-color="#00BBDF"/>
                            <stop offset="0.4375" stop-color="#3EC8DF" stop-opacity="0.62254"/>
                            <stop offset="0.4376" stop-color="#3EC8DF" stop-opacity="0.62254"/>
                            <stop offset="0.65625" stop-color="#5FCFDF" stop-opacity="0.42"/>
                            <stop offset="1" stop-color="#94EAFF" stop-opacity="0"/>
                            </radialGradient>
                            </defs>
                        </svg>
                        {/* <h4 className='text-white text-sm md:text-xl relative'>WE ARE HEROS OF</h4> */}
                        <h1 className='text-white font-bold text-2xl md:text-4xl my-2 relative'>Revolutionizing the way</h1>
                        <h1 className='text-white font-bold text-2xl md:text-4xl my-2 relative'>you do business</h1>
                        <p className='text-white mt-4 mb-0 text-xs md:text-sm relative'>Elevate your business with our expertly crafted web and mobile apps,</p>
                        <p className='text-white mt-2 mb-0 text-xs md:text-sm relative'>complete with end-to-end support and guidance</p>
                        <button className='px-16 py-3 text-[#00B3C3] border-2 border-[#00B3C3] text-sm md:text-xl font-bold my-6 focus:outline-none relative
                        hover:bg-white
                        '>
                            Let's Talk
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
