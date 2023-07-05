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

/***** Seller ****/
import SellerLogin from '../pages/sellerAccount/SellerLogin';
import SellerRegister from '../pages/sellerAccount/SellerRegister';
import { AuthSellerContext } from '../contexts/AuthSellerContext';
import SellerLayout from '../pages/sellerProfile/SellerLayout';
import SellerAddressBook from '../pages/sellerProfile/SellerAddressBook';
import SellerProfile from '../pages/sellerProfile/SellerProfile';
import SellerPasswordEdit from '../pages/sellerProfile/SellerPasswordEdit';
import SellerOrder from '../pages/sellerProfile/SellerOrder';
import SellerDelivery from '../pages/sellerProfile/SellerDelivery';
import SellerProductAdd from '../pages/sellerProfile/SellerProductAdd';
import SellerProductMain from '../pages/sellerProfile/SellerProductMain';

function Router() {
  const { customer } = useContext(AuthContext);
  const { seller } = useContext(AuthSellerContext);

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

          {seller ? (
            <Route path="Seller" element={<SellerLayout />}>
              <Route path="Profile/:sellerId" element={<SellerProfile />} />
              <Route
                path="AddressBook/:sellerId"
                element={<SellerAddressBook />}
              />
              <Route
                path="PasswordEdit/:sellerId"
                element={<SellerPasswordEdit />}
              />
              <Route path="order/:sellerId" element={<SellerOrder />} />
              <Route path="delivery/:sellerId" element={<SellerDelivery />} />
              <Route
                path="productadd/:sellerId"
                element={<SellerProductAdd />}
              />
              <Route
                path="productmain/:sellerId"
                element={<SellerProductMain />}
              />
            </Route>
          ) : (
            <>
              <Route path="seller/register" element={<SellerRegister />} />
              <Route path="seller/login" element={<SellerLogin />} />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
}

export default Router;
