// import React from 'react';
import './App.css'

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Footer from './components/footer/Footer'

import '../src/styletailwindcss/main.css'

import Home from './pages/Home'
import ApartmentsPage from './pages/ApartmentsPage'
import Hotels from './pages/Hotels'
import CouponsPage from './pages/CouponsPage'
import HomeStayPage from './pages/HomeStayPage'
import Availability from './pages/Availability'
import PartnerPage from './pages/PartnerPage'
import RoomDetailPage from './pages/RoomDetailPage'
import Register from './components/Register'
import PageHomeOwn from './components/PageHomeOwn/index'
import Location from './components/PageHomeOwn/AddItem/AddLocation/Location'
import TypeApartment from './components/PageHomeOwn/AddItem/Item/TypeApartment'
import Login from './components/Login'
import ApartmentOWn from './components/Apartment'

// import React, { useEffect, useState } from 'react'
// import apartmentApi from './api/apartmentApi'

function App() {
 

  return (
    <div className="App">
     
      <Router>
        
      
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/hotels">
            <Hotels />
          </Route>

          <Route path="/apartments-page">
            <ApartmentsPage />
          </Route>

          <Route path="/coupons-page">
            <CouponsPage />
          </Route>

          <Route path="/home-stay">
            <HomeStayPage />
          </Route>

          <Route path="/famous-place">
            <Availability />
          </Route>

          <Route path="/become-a-partner">
            <PartnerPage />
          </Route>

          <Route path="/near-by-location">
            <RoomDetailPage />
          </Route>

{/* formAdd */}
          <Route path="/input">
            <Login />
          </Route>

          <Route path="/pagehome/apartment">
            <ApartmentOWn />
          </Route>

          {/* <Route path="/additem" component={Location}>
          </Route> */}

          <Route path="/typeApartment">
            <TypeApartment />
          </Route>
{/* formAdd */}
          <Route path="/pagehome" component={PageHomeOwn}>
            {/* <PageHomeOwn /> */}
          </Route>

          
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
