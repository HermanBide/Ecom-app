import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <p className="text-gray-700">Payment gateway only applicable for Production build.</p>
        <Link to="/">
          <button className="w-52 h-10 bg-secondary text-white text-lg mt-4 hover:bg-secondaryDark rounded-md duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;