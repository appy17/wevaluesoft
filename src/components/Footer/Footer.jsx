import React from 'react'

function Footer() {
    return (
        <>
            <footer className='bg-[#040E1A] w-full py-16 px-4'>
                <div className='max-w-[1145px] mx-auto'>
                    
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h2 className='text-white text-3xl md:text-4xl my-4 font-bold'>Technology We Serve</h2>
                        <p className='w-full md:w-2/3 lg:w-1/2 text-white my-4 text-sm md:text-md'>
                        At Royal's Webtech, we leverage cutting-edge technologies to deliver innovative solutions that drive growth and efficiency for our clients. Our expertise spans a wide range of modern tools and frameworks to ensure robust, scalable, and secure applications.
                        </p>
                    </div>

                    
                    <div className='grid grid-cols-1  md:grid-cols-3 gap-6 my-8 footerMenu'>
                        
                        <div>
                            <ul className='list-none text-white leading-10'>
                                <li>
                                    <a href="#" className='hover:text-gray-400'>http://wevaluesoft.com</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:text-gray-400'>wevaluesoft@gmail.com</a>
                                </li>
                                <li>
                                    <a href="tel:95527 67463" className='hover:text-gray-400'>95527 67463</a>
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
                <div className='flex justify-center mt-4'>
                            <a href="http://royalswebtech.com/" className="mt-4 text-sm text-gray-100 sm:order-first sm:mt-0">Designed and Developed by ©Royals WebTech 2024</a>
                            </div>
            </footer>
        </>
    );
}

export default Footer;
