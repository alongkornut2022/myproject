import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import buttonSearch from '../images/download.png';

import UserItemCustomer from './UserItemCustomer';
import { AuthContext } from '../contexts/AuthContext';
import { AuthSellerContext } from '../contexts/AuthSellerContext';
import CategoryOption from './category/CategoryOption';
import HeaderCart from './HeaderCart';
import UserItemSeller from './sellers/UserItemSeller';

function Header({ category }) {
  const { customer } = useContext(AuthContext);
  const { seller } = useContext(AuthSellerContext);

  const [searchText, setSearchText] = useState('');
  const [selectCategory, setSelectCategory] = useState('หมวดหมู่ทั้งหมด');

  const keyword = selectCategory.concat(['='], searchText);

  const navigate = useNavigate();

  const handleEnterSearch = async (event) => {
    if (event.key === 'Enter') {
      try {
        navigate(`Product/search/${keyword}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="header_main">
        <div className="header_top">
          <div className="header_top_left">
            <div hidden={seller || customer ? 'hidden' : ''}>
              <i class="fa-solid fa-shop"></i> ร้านค้า |
            </div>
            <div hidden={seller || customer ? 'hidden' : ''}>
              <Link end to="/seller/register">
                สร้างบัญชี : ผู้ขาย |
              </Link>
            </div>
            <div hidden={seller || customer ? 'hidden' : ''}>
              <Link end to="/seller/login">
                เข้าสู่ระบบ : ผู้ขาย |
              </Link>
            </div>
          </div>
          <div className="header_top_center"></div>
          <div className="header_top_right">
            {customer ? <UserItemCustomer /> : null}
            {seller ? <UserItemSeller /> : null}
          </div>
        </div>
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
                  onKeyDown={handleEnterSearch}
                />
                <div className="button_search">
                  <Link end to={`Product/search/${keyword}`}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="header_right">
              <div
                className="header_right_addtocart"
                hidden={seller ? 'hidden' : ''}
              >
                <HeaderCart customer={customer ? customer : ''} />
              </div>
              {/* <div className="header_right_useritem">
                {customer ? <UserItemCustomer /> : null}
              </div>
              <div className="header_right_useritem">
                {seller ? <UserItemSeller /> : null}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
