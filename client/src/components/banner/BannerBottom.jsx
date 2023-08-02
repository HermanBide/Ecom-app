import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 py-4 px-4">
    {/* Warranty */}
    <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
        <span className="font-bold text-center w-6">2</span>
        <p className="text-base text-gray-800 font-bold">Two years warranty</p>
      </div>
  
      {/* Free Shipping */}
      <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
        <span className="text-xl text-center w-6 ml-1">
          <MdLocalShipping />
        </span>
        <p className="text-base text-gray-800  font-bold">Free shipping</p>
      </div>
  
      {/* Return Policy */}
      <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
        <span className="text-2xl text-center w-6">
          <CgRedo />
        </span>
        <p className="text-base text-gray-800  font-bold">Return policy in 30 days</p>
      </div>
    </div>
  </div>
  );
};

export default BannerBottom;