import React from 'react';
import banner from '../assets/hero.png';
import AuctionList from '../Components/Sell/AuctionList';
import Filters from '../Components/Sell/Filters';

const Sell = () => {
  const todayAuctions = [
    {
      title: 'McLaren 35',
      manufacture: '1990, New york, USA',
      price: '15',
      time: '14D 16H (July 17, 2024 03:57 AM UTC+07)',
      image:
        'https://images.unsplash.com/photo-1700704054142-cdab3aaa55d2?q=80&w=1505&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'GTR R35',
      manufacture: '1990, New york, USA',
      price: '20',
      time: '14D 16H (July 17, 2024 03:57 AM UTC+07)',
      image:
        'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'BMW i8',
      manufacture: '1990, New york, USA',
      price: '25',
      time: '14D 16H (July 17, 2024 03:57 AM UTC+07)',
      image:
        'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const upcomingAuctions = [
    {
      title: 'McLaren 35',
      manufacture: '1990, New york, USA',
      manufacture: '1990, New york, USA',
      price: '15',
      time: '14D 16H (July 17, 2024 03:57 AM UTC+07)',
      image:
        'https://images.unsplash.com/photo-1700704054142-cdab3aaa55d2?q=80&w=1505&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'GTR R35',
      manufacture: '1990, New york, USA',
      price: '20',
      time: '14D 16H (July 17, 2024 03:57 AM UTC+07)',
      image:
        'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'BMW i8',
      manufacture: '1990, New york, USA',
      price: '25',
      time: '14D 16H (July 17, 2024 03:57 AM UTC+07)',
      image:
        'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <div className="flex items-center mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M3.5 11a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
            ></path>
          </svg>
        </div>
        <div className="ml-4">
          <button className="bg-gray-700 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400">
            Categories
          </button>
        </div>
      </div>

      {/*  Banner */}
      <div className="bg-gray-100 p-8 rounded-lg flex items-center space-x-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">Red freight truck</h2>
          <p className="text-lg mb-2">
            Peterbilt Car Tesla Semi
            <br />
            Semi-trailer truck
          </p>
          <p className="text-lg mb-4">Feel special with 15% off*</p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-full">
            Auction now
          </button>
        </div>
        <div>
          <img src={banner} alt="Red freight truck" className="w-64 h-auto" />
        </div>
        {/* Fillter */}
      </div>
      <div className="min-h-screen  p-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/4">
              <Filters />
            </div>
            <div className="lg:w-3/4">
              <AuctionList title="Today's Auctions" items={todayAuctions} />
              <AuctionList title="Upcoming Auctions" items={upcomingAuctions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
