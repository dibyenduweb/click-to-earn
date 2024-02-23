/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaBeer, FaCoffee, FaCar, FaLaptop, FaCode, FaRocket } from 'react-icons/fa';
import Heading from '../globalstyle/Heading';

const Features = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/featurs.json');
        const data = await response.json();
        setCardsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    
    <Heading title='Features'/>
    
      <div className='grid grid-cols-3 gap-10 p-24'>
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-900"
          >
          <div className='text-5xl flex justify-center text-sky-500'>
          {card.icon === 'FaBeer' && <FaBeer />}
            {card.icon === 'FaCoffee' && <FaCoffee />}
            {card.icon === 'FaCar' && <FaCar />}
            {card.icon === 'FaLaptop' && <FaLaptop />}
            {card.icon === 'FaCode' && <FaCode />}
            {card.icon === 'FaRocket' && <FaRocket />}
          </div>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {card.description}
            </p>
            
           
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
