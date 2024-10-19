import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { CiMobile2 } from "react-icons/ci";
import { CiLaptop } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { FaPencilRuler } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

function Products() {
    const cards = [
        {
            icon: <CiMobile2 />,
            text: 'Mobile Application Development',
            description: 'Unlock the potential of your business with our mobile app solutions that redefine user experience and drive success.',
            link: 'link.wevaluesoft.com'
        },
        {
            icon: <CiLaptop />,
            text: 'Web Plateform Development',
            description: 'Transform your digital presence with our cutting-edge web platform development services that elevate your online business.',
            link: 'link.wevaluesoft.com'
        },
        {
            icon: <AiOutlineProduct />,
            text: 'Product Design & Development',
            description: 'From idea to reality, we craft innovative products that captivate users and revolutionize industries.',
            link: 'link.wevaluesoft.com'
        },
        {
            icon: <FaPencilRuler />,
            text: 'UI/UX Strategy & Design',
            description: 'Empower your brand with irresistible user experiences and stunning designs that leave a lasting impression.',
            link: 'link.wevaluesoft.com'
        },
        {
            icon: <IoPricetagsOutline />,
            text: 'Minimum Viable Product (MVP)',
            description: 'Launch smarter, faster, and leaner with our Minimum Viable Product solutions that validate your idea and accelerate growth.',
            link: 'link.wevaluesoft.com'
        },
    ];

    const [selectedCard, setSelectedCard] = useState(0);

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    return (
        <div className='bg-[#040E1A] py-16 px-4 w-full'>
            <div className='max-w-[1145px] mx-auto'>
                <div className='text-center'>
                    {/* <h4 className='text-white text-lg md:text-xl'>WHAT WE DO?</h4> */}
                    <h2 className='text-white text-3xl md:text-4xl my-4 font-bold'>Our Experties</h2>
                    <h2 className='text-white text-2xl md:text-3xl my-4 font-bold'>At Your Service</h2>
                </div>
                {/* Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 my-8'>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(index)}
                            className={`bg-[#021325] shadow-lg rounded-md p-4 h-24 md:h-32 lg:h-40 font-bold text-white flex-col flex justify-center  border border-gray-700 cursor-pointer ${selectedCard === index ? 'ring-4 ring-[#00B3C3]' : ''}`}
                        >
                            <p className='text-4xl my-2'>{card.icon}</p>
                            {card.text}
                        </div>
                    ))}
                </div>

                {/* Card Details */}
                {selectedCard !== null && (
                    <div className='bg-[#021325] w-full p-6 rounded-md border border-gray-700'>
                        <h3 className='text-white text-xl md:text-2xl font-bold'>{cards[selectedCard].text}</h3>
                        <p className='text-white mt-4 text-sm md:text-base'>{cards[selectedCard].description}</p>
                        <a href='#' className='text-right border-b-2 text-[#00B3C3] flex items-center justify-end py-2 text-sm md:text-base'>Details <IoIosArrowForward /></a>
                        <a href="#" className='text-[#00B3C3] m-4 text-sm md:text-base'>{cards[selectedCard].link}</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Products;
