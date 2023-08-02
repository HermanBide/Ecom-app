import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/slice";
import emptyCart  from "../../assets/images/emptyCart.png";
import ItemCard from "./ItemCard";
import { GoTriangleDown } from "react-icons/go";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="grid grid-cols-5 gap-4 bg-[#F5F7F7] text-secondary text-lg font-titleFont font-semibold p-6 lg:hidden rounded-md">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="hidden lgl:grid grid-cols-5 gap-4 place-content-center bg-[#F5F7F7] text-secondary text-lg font-titleFont font-semibold p-6 rounded-md">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5">
            {products.map((item) => (
              <div key={item._id} className="text-gray-700">
                <ItemCard item={item} />
              </div>
            ))}
          </div>

          <button
            onClick={() => dispatch(resetCart())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300 rounded-full"
          >
            Reset cart
          </button>

          <div className="flex flex-col md:flex-row justify-between border py-4 px-4 items-center gap-2 md:gap-0 rounded-md">
            <div className="flex items-center gap-4">
              <label htmlFor="sort" className="text-base text-gray-700">
                Sort by:
              </label>
              <select
                id="sort"
                className="w-32 md:w-52 border border-gray-200 py-1 px-4 cursor-pointer text-secondary text-base block dark:placeholder-gray-600 appearance-none focus:outline-none focus-visible:border-primeColor rounded-md"
              >
                <option value="Best Sellers">Best Sellers</option>
                <option value="New Arrival">New Arrival</option>
                <option value="Featured">Featured</option>
                <option value="Final Offer">Final Offer</option>
              </select>
              <span className="absolute text-sm right-2 md:right-4 top-2.5">
                <GoTriangleDown />
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-800">Update Cart</p>
          </div>
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right text-gray-800">Cart totals</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium text-gray-700">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont text-gray-800">
                    ${totalAmt}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium text-gray-700">
                  Shipping Charge
                  <span className="font-semibold tracking-wide font-titleFont text-gray-700">
                    ${shippingCharge}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium text-gray-700">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont text-gray-700">
                    ${totalAmt + shippingCharge}
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <Link to="/paymentgateway">
                  <button className="w-52 h-10 bg-secondary hover:bg-secondaryDark duration-300 rounded-full text-white">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase text-gray-700">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2 text-gray-700">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-primary cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300 rounded-md">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;