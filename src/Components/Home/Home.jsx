import React from 'react';
import Navbar from '../Shared/Navbar';

import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;