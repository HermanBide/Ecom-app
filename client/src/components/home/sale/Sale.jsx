import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer"; // Import the hook
import saleImgOne from "../../../assets/images/products/bestSeller/bestSellerOne.webp";
import saleImgTwo from "../../../assets/images/products/bestSeller/bestSellerTwo.webp";
import saleImgThree from "../../../assets/images/products/bestSeller/bestSellerThree.webp";
import Image from "../../designLayouts/Image";

const Sale = () => {
  const [img1InView, setImg1InView] = useState(false);
  const [img2InView, setImg2InView] = useState(false);
  const [img3InView, setImg3InView] = useState(false);

  const observerOptions = {
    threshold: 0.2, 
  };

 
  const [ref1, inView1] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  const [ref3, inView3] = useInView(observerOptions);

 
  if (inView1 && !img1InView) {
    setImg1InView(true);
  }
  if (inView2 && !img2InView) {
    setImg2InView(true);
  }
  if (inView3 && !img3InView) {
    setImg3InView(true);
  }

  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10 px-4">
      <div className="w-full md:w-2/3 lg:w-1/2 h-96" ref={ref1}>
        <Link to="/shop">
          <Image
            className={`h-full w-full object-cover rounded-lg shadow-lg transition-opacity duration-1000 ${
              img1InView ? "opacity-100" : "opacity-0"
            }`}
            imgSrc={saleImgOne}
          />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full" ref={ref2}>
          <Link to="/shop">
            <Image
              className={`h-full w-full object-cover rounded-lg shadow-lg transition-opacity duration-1000 ${
                img2InView ? "opacity-100" : "opacity-0"
              }`}
              imgSrc={saleImgTwo}
            />
          </Link>
        </div>
        <div className="h-1/2 w-full" ref={ref3}>
          <Link to="/shop">
            <Image
              className={`h-full w-full object-cover rounded-lg shadow-lg transition-opacity duration-1000 ${
                img3InView ? "opacity-100" : "opacity-0"
              }`}
              imgSrc={saleImgThree}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;