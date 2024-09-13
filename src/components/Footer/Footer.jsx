import React from 'react'

function Footer() {
    return (
        <>
            <footer className='bg-[#040E1A] w-full py-16 px-4'>
                <div className='max-w-[1145px] mx-auto'>
                    
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h2 className='text-white text-3xl md:text-4xl my-4 font-bold'>Technology We Serve</h2>
                        <p className='w-full md:w-2/3 lg:w-1/2 text-white my-4 text-sm md:text-md'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores aliquam fugit magni sequi. Iste harum quis, odio pariatur exercitationem officia.
                        </p>
                    </div>

                    
                    <div className='grid grid-cols-1  md:grid-cols-3 gap-6 my-8 footerMenu'>
                        
                        <div>
                            <ul className='list-none text-white leading-10'>
                                <li>
                                    <a href="#" className='hover:text-gray-400'>www.vikarno.com</a>
                                </li>
                                <li>
                                    <a href="mailto:vikarno@gmail.com" className='hover:text-gray-400'>vikarno@gmail.com</a>
                                </li>
                                <li>
                                    <a href="tel:+989121120912" className='hover:text-gray-400'>+989121120912</a>
                                </li>
                            </ul>
                        </div>

                        {/* Company Information */}
                        <div>
                            <ul className='list-none text-white leading-10'>
                                <li>
                                    <a href="#" className='hover:text-gray-400'>Why Us</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-gray-400'>FAQ</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-gray-400'>Insights</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-gray-400'>How We Work</a>
                                </li>
                            </ul>
                        </div>

                        {/* Navigation Links */}
                        <div>
                            <ul className='list-none text-white leading-10'>
                                <li>
                                    <a href="#" className='hover:text-gray-400'>Home</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-gray-400'>Our Work</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-gray-400'>Contact Us</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-gray-400'>Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
