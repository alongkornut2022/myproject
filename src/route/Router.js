import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Layout from '../pages/Layout';
import ProductCategory from '../pages/ProductCategory';
import ProductSearch from '../pages/ProductSearch';
import ProductDetail from '../pages/ProductDetail';
import AddToCart from '../pages/AddToCart';
import OrderItem from '../pages/OrderItem';
import OrderTotal from '../pages/OrderTotal';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AddressBook from '../pages/Customer/AddressBook';
import CustomerDetail from '../pages/Customer/CustomerDetail';
import OrderHistory from '../pages/Customer/OrderHistory';
import PasswordEdit from '../pages/Customer/PasswordEdit';
import HowToOrderPage from '../pages/HowToOrderPage';
import PaymentMethodPage from '../pages/PaymentMethodPage';
import DeliveryMethodPage from '../pages/DeliveryMethodPage';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="ProductCategory" element={<ProductCategory />} />
          <Route path="ProductSearch" element={<ProductSearch />} />
          <Route path="ProductDetail" element={<ProductDetail />} />
          <Route path="AddToCart" element={<AddToCart />} />
          <Route path="OrderItem" element={<OrderItem />} />
          <Route path="OrderTotal" element={<OrderTotal />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="AddressBook" element={<AddressBook />} />
          <Route path="CustomerDetail" element={<CustomerDetail />} />
          <Route path="OrderHistory" element={<OrderHistory />} />
          <Route path="PasswordEdit" element={<PasswordEdit />} />
          <Route path="HowToOrderPage" element={<HowToOrderPage />} />
          <Route path="PaymentMethodPage" element={<PaymentMethodPage />} />
          <Route path="DeliveryMethodPage" element={<DeliveryMethodPage />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
