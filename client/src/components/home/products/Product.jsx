import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slice";

const Product = (props) => {
    const dispatch = useDispatch();
    const _id = props.productName;
    const idString = (_id) => {
      return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);
  
    const navigate = useNavigate();
    const productItem = props;
    const handleProductDetails = () => {
      navigate(`/product/${rootId}`, {
        state: {
          item: productItem,
        },
      });
    };
    return (
<div className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
  <div className="relative">
    <Image className="w-full h-80 object-cover" imgSrc={props.img} />
    {props.badge && (
      <div className="absolute top-4 left-4 bg-primary text-white px-2 py-1 rounded">
        New
      </div>
    )}
  </div>
  <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div>
  <div className="px-4 py-6">
    <h2 className="text-lg font-bold text-primary">{props.productName}</h2>
    <p className="text-sm text-gray-600">${props.price}</p>
    <p className="text-sm text-gray-600">{props.color}</p>
  </div>
  <div className="bg-white">
    <ul className="flex items-center justify-evenly p-4 border-t border-b border-gray-200">
      <li
        className="text-gray-700 hover:text-primary cursor-pointer"
        onClick={() => { dispatch(
          addToCart({
            _id: props._id,
            name: props.productName,
            quantity: 1,
            image: props.img,
            badge: props.badge,
            price: props.price,
            colors: props.color,
          })
        )
        alert(`${props.productName} has been added to the cart.`);
        }}
      >
        <FaShoppingCart />
        <span className="ml-1">Add to Cart</span>
      </li>
      <li className="text-gray-700 hover:text-primary cursor-pointer">
        <GiReturnArrow />
        <span className="ml-1">Compare</span>
      </li>
      <li
        className="text-gray-700 hover:text-primary cursor-pointer"
        onClick={handleProductDetails}
      >
        <MdOutlineLabelImportant />
        <span className="ml-1">View Details</span>
      </li>
      <li className="text-gray-700 hover:text-primary cursor-pointer">
        <BsSuitHeartFill />
        <span className="ml-1">Add to Wish List</span>
      </li>
    </ul>
  </div>
</div>
    );
  };
  
  export default Product;