import { Outlet } from 'react-router-dom';
import CustomerSidebar from '../../components/CustomerSidebar';

function CustomerDetail() {
  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <CustomerSidebar />

        <div className="customer_main_content_right">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CustomerDetail;
