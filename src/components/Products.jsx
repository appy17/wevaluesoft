import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

function Products() {
    const cards = [
        {
            text: 'wevaluesoft Trade',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo provident officia quisquam rerum veritatis laudantium voluptatem nisi! Ad ab quasi soluta blanditiis magni sit voluptate maxime mollitia accusantium ullam?',
            link: 'link.wevaluesoft.com'
        },
        {
            text: 'wevaluesoft Shop',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo provident officia quisquam rerum veritatis laudantium voluptatem nisi! Ad ab quasi soluta blanditiis magni sit voluptate maxime mollitia accusantium ullam?',
            link: 'link.wevaluesoft.com'
        },
        {
            text: 'wevaluesoft Gateway',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo provident officia quisquam rerum veritatis laudantium voluptatem nisi! Ad ab quasi soluta blanditiis magni sit voluptate maxime mollitia accusantium ullam?',
            link: 'link.wevaluesoft.com'
        },
        {
            text: 'wevaluesoft Pay',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo provident officia quisquam rerum veritatis laudantium voluptatem nisi! Ad ab quasi soluta blanditiis magni sit voluptate maxime mollitia accusantium ullam?',
            link: 'link.wevaluesoft.com'
        },
        {
            text: 'wevaluesoft Exchange',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illo provident officia quisquam rerum veritatis laudantium voluptatem nisi! Ad ab quasi soluta blanditiis magni sit voluptate maxime mollitia accusantium ullam?',
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
                    <h4 className='text-white text-lg md:text-xl'>WHAT WE DO?</h4>
                    <h2 className='text-white text-3xl md:text-4xl my-4 font-bold'>Products</h2>
                </div>
                {/* Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 my-8'>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(index)}
                            className={`bg-[#021325] shadow-lg rounded-md p-4 h-24 md:h-32 lg:h-40 font-bold text-white flex justify-center items-center border border-gray-700 cursor-pointer ${selectedCard === index ? 'ring-4 ring-[#00B3C3]' : ''}`}
                        >
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
