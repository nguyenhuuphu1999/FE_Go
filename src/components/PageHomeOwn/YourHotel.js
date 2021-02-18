import React,{useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import YourHotelItems from './YourHotelItems'
import {
    Link
  } from "react-router-dom";
const YourHotel = (props) => {
    const [ id , setId] = useState()
    useEffect(()=>{
      setId(window.location.search.split('=')[1])
    })

    return (
        <div >
            <div style={{fontSize:'26px', fontWeight:500,marginTop:'30px'}}>Khách sạn của bạn </div><Link to={{pathname:"pagehome/apartment" ,search:"?id=" + id}} > Xem tất cả</Link>
            <YourHotelItems indexPage = {props.indexPage}/>
      </div>
    );
};

export default YourHotel;