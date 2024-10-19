import React, { useState } from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className='bg-[#040E1A] py-16 w-full'>
            <div className='max-w-[1145px]' style={{ margin: '0 auto' }}>
                <div className='p-16 border border-1 border-gray-700 rounded-md'>
                    <div className='grid grid-cols-1 md:grid-cols-[70%,30%] gap-6 my-12'>
                        <div className='text-white'>
                            <h2 className='text-[#00B3C3] text-4xl font-bold mb-3'>CONTACT US</h2>
                            {/* <p className='leading-8 pr-16'>
                                <span className='text-[#00B3C3]'>We at</span> Vikarne are looking to provide a solution to solve the software problems of the market. For this purpose, we have gathered a group of experts in various branches of the software field and relying on the knowledge acquired in the top universities and
                            </p> */}
                            <p className='text-lg my-2'>Intersted in Working With Us?</p>
                            <p className='uppercase'>Let's Talk & Get Started</p>
                            <div className='flex items-center gap-16 my-4'>
                                <div className='bg-[#021325] p-4 border border-gray-700'>
                                    <FaPhoneVolume className='text-[#00B3C3] text-2xl' />
                                </div>
                                <div>
                                    <p>Office:</p>
                                    <p>+91 95290 41400</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-16 my-4'>
                                <div className='bg-[#021325] p-4 border border-gray-700'>
                                    <MdOutlineMail className='text-[#00B3C3] text-2xl' />
                                </div>
                                <div>
                                    <p>Email:</p>
                                    <a href='#'>sales@appristine.com</a>
                                </div>
                            </div>
                            <div className='flex items-center gap-16 my-4'>
                                <div className='bg-[#021325] p-4 border border-gray-700'>
                                    <IoLocationOutline className='text-[#00B3C3] text-2xl' />
                                </div>
                                <div>
                                    <p>Address:</p>
                                    {/* <p>2118 Thomnidge Cir. Syracuse, Connecticut 35624</p> */}
                                    <p>Floor No. 2, Office No. 101, 201, 206 Spot 18 Mall, Wakad - Bhosari BRTS Rd, Wakad Junction, Pimple Saudagar, Pune, Maharashtra, India, 411017</p>
                                </div>
                            </div>
                        </div>

                        <div className='text-white'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-2" htmlFor="name">Name</label>
                                    <input
                                        className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2" htmlFor="email">Email</label>
                                    <input
                                        className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2" htmlFor="description">Description</label>
                                    <textarea
                                        className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Enter your message"
                                        required
                                    />
                                </div>
                                <button
                                    className="w-full bg-[#00B3C3] text-white p-2 rounded"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact