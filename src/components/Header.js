import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import buttonSearch from '../images/download.png';
import addtocart from '../images/cart.jpg';
import UserItemCustomer from './UserItemCustomer';
import { AuthContext } from '../contexts/AuthContext';
import CategoryOption from './category/CategoryOption';

function Header({ category }) {
  const { customer } = useContext(AuthContext);

  const [searchText, setSearchText] = useState('');
  const [selectCategory, setSelectCategory] = useState('หมวดหมู่ทั้งหมด');

  const keyword = selectCategory.concat(['='], searchText);

  return (
    <>
      <div className="header">
        <div className="header_container">
          <div className="header_left">
            <Link end to="/HomePage">
              Logo
            </Link>
          </div>
          <div className="header_middle">
            <div className="dropdown_product_category">
              <CategoryOption
                category={category}
                selectCategory={selectCategory}
                setSelectCategory={setSelectCategory}
              />
            </div>
            <div className="searchbar_product">
              <input
                type="text"
                placeholder="ค้นหาสินค้า"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
              <div className="button_search">
                <Link end to={`Product/search/${keyword}`}>
                  <img src={buttonSearch} />
                </Link>
              </div>
            </div>
          </div>
          <div className="header_right">
            <div className="header_right_addtocart">
              <Link end to={customer ? `/cart/${customer.id}` : '/Login'}>
                <img src={addtocart} />
              </Link>
            </div>
            <div className="header_right_useritem">
              {customer ? <UserItemCustomer /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
