import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <NavBar />
      <main className="layout_main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
