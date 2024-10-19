import React from 'react';

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#040E1A]-100 p-4">
            <div className="max-w-4xl text-center">
                <h1 className="text-5xl font-bold m-10 text-white">About Us</h1>
                <p className="text-lg text-white mb-6">
                    At WeValueSoft, we are committed to delivering high-quality software solutions to our clients. With a focus on innovation, integrity, and customer satisfaction, our goal is to solve complex challenges and help businesses succeed in a rapidly evolving digital world.
                </p>
                <p className="text-lg text-white mb-6">
                    Founded in 2015, our team consists of talented developers, designers, and strategists with diverse expertise across various domains. From web development to cloud solutions, we leverage the latest technologies to build scalable, reliable, and efficient software.
                </p>

                <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
                <ul className="list-disc list-inside text-left text-lg text-white mb-6">
                    <li>Innovation</li>
                    <li>Customer Satisfaction</li>
                    <li>Integrity and Transparency</li>
                    <li>Continuous Improvement</li>
                </ul>

                <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                    <div className="border-2 border-gray-500 text-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p className="text-gray-500">CEO & Founder</p>
                        <p className="mt-2">With over 15 years of experience, John leads the team with a passion for technology and innovation.</p>
                    </div>
                    <div className="border-2 border-gray-500 text-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Jane Smith</h3>
                        <p className="text-gray-500">Lead Developer</p>
                        <p className="mt-2">Jane is an expert in full-stack development, specializing in building robust and scalable applications.</p>
                    </div>
                    <div className="border-2 border-gray-500 text-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Alice Johnson</h3>
                        <p className="text-gray-500">UI/UX Designer</p>
                        <p className="mt-2">Alice designs intuitive and user-friendly interfaces that create an excellent user experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
