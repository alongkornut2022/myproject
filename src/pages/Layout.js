import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from '../config/axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

function Layout() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const resCategory = await axios.get('/products/category/');
        setCategory(resCategory.data.category);
      } catch (err) {}
    };
    fetchCategory();
  }, []);
  return (
    <div className="layout">
      <Header category={category} />
      <NavBar />
      <main className="layout_main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
