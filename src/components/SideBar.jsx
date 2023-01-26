import React from "react";
import { Link } from "react-router-dom";
import { UilBitcoin } from '@iconscout/react-unicons'

const SideBar = () => {
  return (
    <div className="bg-gray-700 w-[21vw] h-screen">
      <div className="flex flex-col items-center py-12 gap-10">
      <div className="flex flex-row gap-4">
        <UilBitcoin size="45" color="#fff"/>
        <h3 className="text-white font-bold text-2xl pt-[0.45rem]">Crypto Info</h3>
        </div>
        <div className="flex flex-col items-start gap-4 w-[75%]">
          <Link
            className="text-white text-base w-full py-2 px-2 rounded-lg bg-gray-800"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-white text-base w-full py-2 px-2 rounded-lg bg-gray-800"
            to="/cryptocurrencies"
          >
            Cryptocurrencies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
