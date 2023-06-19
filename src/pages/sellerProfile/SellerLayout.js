import { Outlet } from 'react-router-dom';
import SellerSidebar from '../../components/sellers/SellerSidebar';

function SellerDetail() {
  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <SellerSidebar />

        <div className="customer_main_content_right">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SellerDetail;
