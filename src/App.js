/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes, Router } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar } from './components';
import './App.css';
import Homepage from './components/Homepage';
import Exchange from './components/Exchange';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            {/*  use routes instead of Switch */}

            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchange" element={<Exchange />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />{' '}
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
