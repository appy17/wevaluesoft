import React from 'react';
import { MdWeb } from "react-icons/md";
import { RiAppleLine } from "react-icons/ri";
import { BsAndroid2 } from "react-icons/bs";
import { SiCodeblocks } from "react-icons/si";

function Workwithus() {
    return (
        <>
            <div className='bg-[#040E1A] w-full py-16 px-4'>
                <div className='max-w-[1145px] mx-auto'>

                    <div className='text-center flex flex-col justify-center items-center'>
                        <h4 className='text-white text-lg md:text-xl'>WORK WITH US</h4>
                        <h2 className='text-white text-3xl md:text-4xl my-4 font-bold'>Technology We Serve</h2>
                        <p className='w-full md:w-2/3 lg:w-1/2 text-white my-4 text-sm md:text-md'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores aliquam fugit magni sequi. Iste harum quis, odio pariatur exercitationem officia adipisci laboriosam repellendus aspernatur magni eum facilis quo quidem.
                        </p>
                    </div>

                    {/* Icon Grid */}
                    <div className='bg-[#021325] flex items-center justify-center my-8 shadow-lg border rounded-md border-gray-700'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-12 md:w-2/4 text-center'>
                            <div className='flex items-center justify-center'>
                                <span className='text-white'>
                                    <MdWeb className='text-5xl md:text-6xl' />
                                    <sub className='text-md md:text-lg'>Web</sub>
                                </span>
                            </div>
                            <div className='flex items-center justify-center'>
                                <span className='text-white'>
                                    <RiAppleLine className='text-5xl md:text-6xl' />
                                    <sub className='text-md md:text-lg'>iOS</sub>
                                </span>
                            </div>
                            <div className='flex items-center justify-center'>
                                <span className='text-white'>
                                <BsAndroid2 className='text-5xl md:text-6xl'/>
                                    <sub className='text-md md:text-lg'>Android</sub>
                                </span>
                            </div>
                            <div className='flex items-center justify-center'>
                                <span className='text-white'>
                                    <SiCodeblocks className='text-5xl md:text-6xl' />
                                    <sub className='text-md md:text-lg'>Blockchain</sub>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Workwithus;
