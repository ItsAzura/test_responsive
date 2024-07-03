import React from 'react';

const AuctionItem = ({ title, price, image, manufacture, time }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold ">{title}</h3>
      <p className="text-xs">{manufacture}</p>
      <p className="text-2xl mt-2 mb-2">${price}</p>
      <p className="text-xs">{time}</p>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded items-end w-[40%] ml-[60%]">
        + Add list
      </button>
    </div>
  );
};

export default AuctionItem;
