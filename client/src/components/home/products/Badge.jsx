import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-secondary w-32 h-12 text-white flex justify-center items-center text-base font-semibold rounded-lg hover:bg-secondaryDark duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;
