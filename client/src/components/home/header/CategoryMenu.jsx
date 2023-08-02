import React from "react";
import { motion } from "framer-motion";

const CategoryMenu = ({ show, onItemClick }) => {
  return (
    <>
      {show && (
        <motion.ul
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-36 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
        >
          {/* Add your menu items here */}
          <li
            className="text-gray-700 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-primary duration-300 cursor-pointer"
            onClick={() => onItemClick("accessories")}
          >
            Accessories
          </li>
          {/* Add more menu items */}
        </motion.ul>
      )}
    </>
  );
};

export default CategoryMenu;