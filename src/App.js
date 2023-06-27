/** @format */

import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
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
            <Routes>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchange">
                <Exchange />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
