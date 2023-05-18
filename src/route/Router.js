import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Layout from '../pages/Layout';
import CustomerLayout from '../pages/Customer/CustomerLayout';
import ProductCategory from '../pages/products/ProductCategory';
import ProductSearch from '../pages/products/ProductSearch';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import OrderResult from '../pages/OrderResult';
import Order from '../pages/Order';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AddressBook from '../pages/Customer/AddressBook';
import Profile from '../pages/Customer/Profile';
import OrderHistory from '../pages/Customer/OrderHistory';
import PasswordEdit from '../pages/Customer/PasswordEdit';
import HowToOrderPage from '../pages/HowToOrderPage';
import PaymentMethodPage from '../pages/PaymentMethodPage';
import DeliveryMethodPage from '../pages/DeliveryMethodPage';
import ProductBestBuy from '../pages/products/ProductBestBuy';
import ProductNew from '../pages/products/ProductNew';
import { AuthContext } from '../contexts/AuthContext';
import ProductLayout from '../pages/products/ProductLayout';
import ProductLowToHigh from '../pages/products/ProductLowToHigh';
import ProductHighToLow from '../pages/products/ProductHighToLow';

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
                <Route path="Purchase/:customerId" element={<OrderResult />} />
              </Route>
              <Route
                path="Purchase/:customerId/checkout/:cartIds"
                element={<Order />}
              />

              <Route path="product" element={<ProductLayout />}>
                <Route
                  path="Category/:categoryName"
                  element={<ProductCategory />}
                />
                <Route path="sortnewproduct" element={<ProductNew />} />
                <Route path="sortbestbuy" element={<ProductBestBuy />} />
                <Route path="sortlowtohigh" element={<ProductLowToHigh />} />
                <Route path="sorthightolow" element={<ProductHighToLow />} />
                <Route path="Search/:keyword" element={<ProductSearch />} />
              </Route>

              <Route
                path="ProductDetail/:productId"
                element={<ProductDetail />}
              />
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

              <Route path="product" element={<ProductLayout />}>
                <Route
                  path="Category/:categoryName"
                  element={<ProductCategory />}
                />
                <Route path="sortnewproduct" element={<ProductNew />} />
                <Route path="sortbestbuy" element={<ProductBestBuy />} />
                <Route path="sortlowtohigh" element={<ProductLowToHigh />} />
                <Route path="sorthightolow" element={<ProductHighToLow />} />
                <Route path="Search/:keyword" element={<ProductSearch />} />
              </Route>

              <Route
                path="ProductDetail/:productId"
                element={<ProductDetail />}
              />

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
