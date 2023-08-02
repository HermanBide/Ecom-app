import React from "react";
import Banner from "../../components/banner/Banner";
import BannerBottom from "../../components/banner/BannerBottom";
import BestSellers from "../../components/home/bestSellers/BestSellers";
import NewArrivals from "../../components/home/newArrivals/NewArrivals";
import Sale from "../../components/home/sale/Sale";
import SpecialOffers from "../../components/home/specialOffers/SpecialOffers";
import YearProduct from "../../components/home/yearProduct/YearProduct";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;