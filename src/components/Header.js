import React from 'react';
import buttonSearch from '../images/download.png';
import addtocart from '../images/cart.jpg';

function Header() {
  return (
    <>
      <div className="header">
        <div className="header_left">Logo ขายของออนไลน์</div>
        <div className="header_middle">
          <div className="dropdown_product_category">
            <form>
              <select>
                <option>ALL</option>
              </select>
            </form>
          </div>
          <div className="searchbar_product">
            <form>
              <input
                type="text"
                name="form_searchproduct"
                placeholder="ค้นหาสินค้าที่ต้องการ"
                // value={}
              />
            </form>
          </div>
          <div className="button_search">
            <form>
              <buton type="submit">
                <img src={buttonSearch} />
              </buton>
            </form>
          </div>
        </div>
        <div className="header_right">
          <buttom type="submit">
            <img src={addtocart} />
          </buttom>
        </div>
      </div>
    </>
  );
}

export default Header;
