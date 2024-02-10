import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import React from 'react';
import Header from './component/Header/Header';
import { Outlet } from 'react-router-dom';
const App = () => {

  return (
    <div className='app-container'>
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container">

        </div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}




export default App


