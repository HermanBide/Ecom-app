import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-secondary font-semibold text-lg">Ecommerce</span>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis delectus vitae, aliquid sit iure dolorum commodi eum
          numquam voluptate!
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-secondary text-white hover:bg-secondaryDark rounded-md duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;