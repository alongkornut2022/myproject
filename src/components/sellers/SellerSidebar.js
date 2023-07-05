import { useContext, useEffect, useRef, useState } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
// import { Link } from 'react-router-dom';
// import UserItem from '../UserItem';
// import defaultUserPicture from '../../assets/images/userpicture.png';
// import NavbarCustomer from '../NavbarCustomer';
import axios from '../../config/axiosSeller';
// import Spinner from '../Spinner';
import SellerItem from './SellerItem';
import NavbarSeller from './NavbarSeller';
import NavbarSellerMobile from './NavbarSellerMobile';

function SellerSidebar() {
  const { seller } = useContext(AuthSellerContext);
  const [shopPicture, setShopPicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const usePic = useRef();

  const HandleOnClickSaveUserPicture = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('shopPicture', shopPicture);
      await axios.patch(`/sellers/profilepic/${seller.id}`, formData);
      setShopPicture(null);
      document.location.reload();
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const HandleOnClickEditUserPicture = () => {
    usePic.current.click();
  };

  useEffect(() => {
    HandleOnClickSaveUserPicture();
  }, [shopPicture]);

  return (
    <div className="customer_main_content_left">
      <div className="customer_main_content_left_top">
        <SellerItem
          seller={seller}
          loading={loading}
          setShopPicture={setShopPicture}
          HandleOnClickEditUserPicture={HandleOnClickEditUserPicture}
          usePic={usePic}
        />
      </div>

      <div className="customer_main_content_left_buttom">
        <NavbarSeller />
      </div>
      <div className="customer_main_content_left_buttom_mobile">
        <NavbarSellerMobile />
      </div>
    </div>
  );
}

export default SellerSidebar;
