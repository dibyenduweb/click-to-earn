/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CSSButton from '../button/CSSButton';
import Heading from '../globalstyle/Heading';

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/packages.json');
        const data = await response.json();
        setPackages(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
<>
<Heading title="Our Packages"/>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-24 py-6">
{packages.map((pkg) => (
  <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" key={pkg.id}>
    <h5 className="mb-4 text-4xl text-center font-medium text-gray-500 dark:text-gray-400">{pkg.name}</h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-3xl font-semibold">$</span>
      <span className="text-3xl font-bold tracking-tight">{pkg.price}</span>
      <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
    </div>
    <ul role="list" className="space-y-5 my-7">
      <li className="flex items-center">
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">2 team members</span>
      </li>
  
      <li className="flex items-center">
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{`Daily Limit: ${pkg.details.dailyLimit}`}</span>
      </li>
      <li className="flex items-center">
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{`Referral Bonus: ${pkg.details.referralBonus}`}</span>
      </li>
      <li className="flex items-center">
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{`Plan Price: ${pkg.details.planPrice}`}</span>
      </li>
      <li className="flex items-center">
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{`Validity: ${pkg.details.validity}`}</span>
      </li>
    </ul>
    <div className="bg-sky-900 hover:bg-blue-500 text-white text-center font-semibold py-2 px-4 rounded">
   <button>Buy Now </button>
    </div>
  </div>
))}
</div>
</>


  );
};


export default Packages;


