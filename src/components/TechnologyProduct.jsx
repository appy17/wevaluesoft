import React, { useState } from 'react';
// import { FaAngular, FaReact, FaVuejs, SiBootstrap, BiLogoTypescript } from "react-icons/fa";
import { FaReact } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { SiBootstrap, SiTypescript } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaAngular } from 'react-icons/fa';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiDjango } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiSqllite } from "react-icons/di";


function TechnologyProduct() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="relative ">
            <main className="relative  flex flex-col justify-center  overflow-hidden">
                <h1 className='text-4xl text-white font-bold text-center mt-10 mb-2'>Find the best technology
                </h1>
                <h2 className='text-4xl text-white font-bold text-center'> for your product</h2>
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16">
                    {/* Tabs component */}
                    <div>
                        {/* Buttons */}
                        <div className="flex justify-center">
                            <div
                                role="tablist"
                                className="max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center bg-[#021325] border border-gray-700 p-4 rounded-md mb-8 min-[480px]:mb-12"
                            >
                                {/* Button #1 */}
                                <button
                                    id="tab-1"
                                    className={`flex-1 text-xl font-medium  px-4 py-3 focus:outline-none  rounded-md whitespace-nowrap transition-colors duration-150 ease-in-out ${activeTab === 1
                                        ? 'bg-[#00B3C3] text-white'
                                        : 'text-white hover:text-[#00B3C3]'
                                        }`}
                                    aria-selected={activeTab === 1}
                                    aria-controls="tabpanel-1"
                                    onClick={() => setActiveTab(1)}
                                >
                                    Frontend Programming Languages
                                </button>
                                {/* Button #2 */}
                                <button
                                    id="tab-2"
                                    className={`flex-1 text-xl font-medium  px-4 py-3 focus:outline-none  rounded-md whitespace-nowrap transition-colors duration-150 ease-in-out ${activeTab === 2
                                        ? 'bg-[#00B3C3] text-white'
                                        : 'text-white hover:text-[#00B3C3]'
                                        }`}
                                    aria-selected={activeTab === 2}
                                    aria-controls="tabpanel-2"
                                    onClick={() => setActiveTab(2)}
                                >
                                    Backend Programming Languages
                                </button>
                                {/* Button #3 */}
                                <button
                                    id="tab-3"
                                    className={`flex-1 text-xl font-medium  px-4 py-3 focus:outline-none rounded-md whitespace-nowrap transition-colors duration-150 ease-in-out ${activeTab === 3
                                        ? 'bg-[#00B3C3] text-white'
                                        : 'text-white hover:text-[#00B3C3]'
                                        }`}
                                    aria-selected={activeTab === 3}
                                    aria-controls="tabpanel-3"
                                    onClick={() => setActiveTab(3)}
                                >
                                    Database / Data Storages
                                </button>
                            </div>
                        </div>

                        {/* Tab panels */}
                        <div className="max-w-[1145px] mx-auto">
                            <div className="relative flex flex-col">
                                {/* Panel #1 */}
                                {activeTab === 1 && (
                                    <article
                                        id="tabpanel-1"
                                        className="w-full bg-[#021325] p-4 border border-gray-700 rounded-2xl shadow-xl min-[480px]:flex items-stretch"
                                        role="tabpanel"
                                        aria-labelledby="tab-1"
                                    >
                                        <figure className="min-[480px]:w-1/2 p-2">
                                            {/* <img
                        className="w-full h-[180px] min-[480px]:h-full object-cover rounded-lg"
                        width="304"
                        height="214"
                        src="https://cruip-tutorials.vercel.app/unconventional-tabs/tabs-image-01.jpg"
                        alt="Tab 01"
                      /> */}
                                            <p className='text-white leading-10 text-lg'><span className='text-[#00B3C3]'>We Specialize</span> in front-end development using a wide range of programming languages. Our skilled team of developers is experienced in HTML, CSS, JavaScript, TypeScript, React JS, Angular, and Vue.js. With expertise in these languages, we create visually appealing and interactive websites and web applications. By staying up to date with the latest industry trends and frameworks, we deliver cutting-edge front-end solutions tailored to our client's needs.</p>
                                        </figure>
                                        <div className="min-[480px]:w-1/2  p-5 pl-3">
                                            <div className='flex justify-between mb-10 items-center'>
                                                <span className='text-white text-center'><FaAngular className=' text-6xl' />
                                                    <sub className='text-sm'>Angular</sub>
                                                </span>
                                                <span className='text-white text-center'><FaReact className=' text-6xl' />
                                                    <sub className='text-sm'>React</sub>
                                                </span>
                                                <span className='text-white text-center'><SiBootstrap className=' text-6xl' />
                                                    <sub className='text-sm'>Bootstrap</sub>
                                                </span>
                                                <span className='text-white text-center'><FaVuejs className=' text-6xl' />
                                                    <sub className='text-sm'>Vue</sub>
                                                </span>
                                            </div>
                                            <div className='flex justify-between mb-10 items-center'>
                                                <span className='text-white text-center'><BiLogoTypescript className=' text-6xl' />
                                                    <sub className='text-sm'>Type Script</sub>
                                                </span>
                                                <span className='text-white text-center'><FaHtml5 className=' text-6xl' />
                                                    <sub className='text-sm'>HTML</sub>
                                                </span>
                                                <span className='text-white text-center'><FaCss3Alt className=' text-6xl' />
                                                    <sub className='text-sm'>CSS</sub>
                                                </span>
                                                <span className='text-white text-center'><FaJsSquare className=' text-6xl' />
                                                    <sub className='text-sm'>javaScript</sub>
                                                </span>
                                            </div>
                                            <div className='flex gap-24'>
                                                <span className='text-white text-center'><SiFlutter className=' text-6xl' />
                                                    <sub className='text-sm'>Flutter</sub>
                                                </span>
                                                <span className='text-white text-center'><FaNpm className=' text-6xl' />
                                                    <sub className='text-sm'>NPM</sub>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                )}

                                {/* Panel #2 */}
                                {activeTab === 2 && (
                                    <article
                                        id="tabpanel-2"
                                        className="w-full bg-[#021325] p-4 border border-gray-700 rounded-2xl shadow-xl min-[480px]:flex items-stretch"
                                        role="tabpanel"
                                        aria-labelledby="tab-2"
                                    >
                                        <figure className="min-[480px]:w-1/2 p-2">
                                            {/* <img
                                                className="w-full h-[180px] min-[480px]:h-full object-cover rounded-lg"
                                                width="304"
                                                height="214"
                                                src="https://cruip-tutorials.vercel.app/unconventional-tabs/tabs-image-02.jpg"
                                                alt="Tab 02"
                                            /> */}
                                            <p className='text-white leading-10 text-lg'><span className='text-[#00B3C3]'>We Specialize</span> in backend development using a diverse range of programming languages. Our team excels in Python, Java, Ruby, PHP, Node.js, C#, and many more. With these languages, we build scalable server-side applications and APIs. By staying updated with the latest advancements and frameworks, we deliver cutting-edge solutions tailored to our client's specific requirements. Whether it's developing databases, implementing business logic, or optimizing server performance, our proficiency in multiple backend languages enables us to deliver robust and reliable solutions for our client's digital products.</p>
                                        </figure>
                                        <div className="min-[480px]:w-1/2 flex flex-col justify-center p-5 pl-3">
                                            <div className='flex justify-between mb-10 items-center'>
                                                <span className='text-white text-center'><FaNode className=' text-6xl' />
                                                    <sub className='text-sm'>Node Js</sub>
                                                </span>
                                                <span className='text-white text-center'><FaJava className=' text-6xl' />
                                                    <sub className='text-sm'>Java</sub>
                                                </span>
                                                <span className='text-white text-center'><FaPhp className=' text-6xl' />
                                                    <sub className='text-sm'>Php</sub>
                                                </span>
                                                <span className='text-white text-center'><FaPython className=' text-6xl' />
                                                    <sub className='text-sm'>Python</sub>
                                                </span>
                                            </div>
                                            <div className='flex justify-between mb-10 items-center'>
                                                <span className='text-white text-center'><SiDjango className=' text-6xl' />
                                                    <sub className='text-sm'>Django</sub>
                                                </span>
                                                <span className='text-white text-center'><AiOutlineDotNet className=' text-6xl' />
                                                    <sub className='text-sm'>.Net</sub>
                                                </span>
                                                <span className='text-white text-center'><DiRuby className=' text-6xl' />
                                                    <sub className='text-sm'>Ruby</sub>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                )}

                                {/* Panel #3 */}
                                {activeTab === 3 && (
                                    <article
                                        id="tabpanel-3"
                                        className="w-full bg-[#021325] p-4 border border-gray-700 rounded-2xl shadow-xl min-[480px]:flex items-stretch"
                                        role="tabpanel"
                                        aria-labelledby="tab-3"
                                    >
                                        <figure className="min-[480px]:w-1/2 p-2">
                                            {/* <img
                                                className="w-full h-[180px] min-[480px]:h-full object-cover rounded-lg"
                                                width="304"
                                                height="214"
                                                src="https://cruip-tutorials.vercel.app/unconventional-tabs/tabs-image-03.jpg"
                                                alt="Tab 03"
                                            /> */}
                                            <p className='text-white leading-10 text-lg'><span className='text-[#00B3C3]'>We Work</span> with a range of databases and data storage options for popular content management systems like WordPress, Joomla, Drupal, Magento, Laravel Nova, October CMS, Grav, PyroCMS, Typo3, Concrete5, MODX, SilverStripe. Our expertise includes MySQL, PostgreSQL, MongoDB, SQLite, and MariaDB, ensuring reliable and efficient data management. </p>
                                        </figure>
                                        <div className="min-[480px]:w-1/2 flex flex-col justify-center p-5 pl-3">
                                        <div className='flex justify-between mb-10 items-center'>
                                                <span className='text-white text-center'><SiMysql className=' text-6xl' />
                                                    <sub className='text-sm'>My SQL</sub>
                                                </span>
                                                <span className='text-white text-center'><DiSqllite className=' text-6xl' />
                                                    <sub className='text-sm'>Sql Lite</sub>
                                                </span>
                                                <span className='text-white text-center'><SiMongodb className=' text-6xl' />
                                                    <sub className='text-sm'>MongoDB</sub>
                                                </span>
                                                <span className='text-white text-center'><SiPostgresql className=' text-6xl' />
                                                    <sub className='text-sm'>Postgre SQL</sub>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TechnologyProduct;
