import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Layout from '../pages/Layout';
import CustomerLayout from '../pages/Customer/CustomerLayout';
import ProductCategory from '../pages/ProductCategory';
import ProductSearch from '../pages/ProductSearch';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
// import OrderItem from '../pages/OrderItem';
import OrderTotal from '../pages/OrderTotal';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AddressBook from '../pages/Customer/AddressBook';
import Profile from '../pages/Customer/Profile';
import OrderHistory from '../pages/Customer/OrderHistory';
import PasswordEdit from '../pages/Customer/PasswordEdit';
import HowToOrderPage from '../pages/HowToOrderPage';
import PaymentMethodPage from '../pages/PaymentMethodPage';
import DeliveryMethodPage from '../pages/DeliveryMethodPage';
import { AuthContext } from '../contexts/AuthContext';

function Router() {
  const { customer } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {customer ? (
            <>
              <Route index element={<HomePage />} />
              <Route path="HowToOrderPage" element={<HowToOrderPage />} />
              <Route path="PaymentMethodPage" element={<PaymentMethodPage />} />
              <Route
                path="DeliveryMethodPage"
                element={<DeliveryMethodPage />}
              />
              <Route path="About" element={<About />} />
              <Route path="Customer" element={<CustomerLayout />}>
                <Route path="Profile/:id" element={<Profile />} />
                <Route path="AddressBook/:id" element={<AddressBook />} />
                <Route path="PasswordEdit/:id" element={<PasswordEdit />} />
                <Route path="Cart/:id" element={<Cart />} />
                <Route path="OrderHistory/:id" element={<OrderHistory />} />
              </Route>
              <Route path="Purchase/OrderTotal" element={<OrderTotal />} />

              <Route path="ProductCategory" element={<ProductCategory />} />
              <Route path="ProductSearch" element={<ProductSearch />} />
              <Route path="ProductDetail" element={<ProductDetail />} />
              <Route path="*" element={<HomePage />} />
            </>
          ) : (
            <>
              <Route index element={<HomePage />} />
              <Route path="HowToOrderPage" element={<HowToOrderPage />} />
              <Route path="PaymentMethodPage" element={<PaymentMethodPage />} />
              <Route
                path="DeliveryMethodPage"
                element={<DeliveryMethodPage />}
              />
              <Route path="About" element={<About />} />

              <Route path="ProductCategory" element={<ProductCategory />} />
              <Route path="ProductSearch" element={<ProductSearch />} />
              <Route path="ProductDetail" element={<ProductDetail />} />

              <Route path="Register" element={<Register />} />
              <Route path="Login" element={<Login />} />
              <Route path="*" element={<HomePage />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
}

export default Router;
