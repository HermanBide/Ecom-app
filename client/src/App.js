import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  Routes,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./components/home/header/Header";
import HeaderBottom from "./components/home/header/HeaderBottom";
import ItemCard from "./pages/cart/ItemCard";
import Offer from "./pages/offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Shop from "./pages/shop/Shop";
import SpecialCase from "./components/specialCase/SpecialCase";
import Footer from "./components/home/footer/Footer";
import FooterBottom from "./components/home/footer/FooterBottom";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Journal from "./pages/journal/Journal";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <Routes>
        {/* ==================== Header Navlink Start here =================== */}
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journal" element={<Journal />} />
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />} />
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentgateway" element={<Payment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <FooterBottom />
    </>
  );
};

export default App;
