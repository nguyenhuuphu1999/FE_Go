import React from 'react'

import Navbar from '../components/header/Navbar'
import HomeStayNearYou from '../components/homestay/HomeStayNearYou'
import FamousPlaces from '../components/homepage_component/FamousPlaces'
import TopHomeStay from '../components/homestay/TopHomeStay'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchHomeStay } from '../store/homeStay'

const HomeStayPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeStay())
  }, [dispatch])

  const homeStayList = useSelector(state => state.homeStay.typeApartment)

  return (
    <div>
      <Navbar />
      <h3>Tìm chỗ ở riêng</h3>
      <HomeStayNearYou homeStayList={homeStayList}/>
      <FamousPlaces />
      <TopHomeStay />
    </div>
  )
}

export default HomeStayPage
