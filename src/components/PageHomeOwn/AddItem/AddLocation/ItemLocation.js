import React, { Component,useState } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import './main.css';
import Location from '../Item/Location';
import {
    useLocation
  } from "react-router-dom";
import TypeApartment from '../Item/TypeApartment';
import HowManyPerson from '../Item/HowManyPerson';
import HowManyBedRoom from '../Item/HowManyBathRoom';
import WhereIsYourHouse from '../Item/WhereIsYourHouse';
import Map from '../Item/Map';
import Image from '../Item/Image';
import Finish from '../Item/Finish';
import { Adb } from '@material-ui/icons';

const ItemLocation = (props) => {

    // console.log(props.open)
    const [addHotels, setAddHotels] = useState(
       { 
        id_city:0,
        id_type_house:0,
        id_user_own:localStorage.getItem('id'),
        image_url:'chua co data',
        bathroom:0,
        street:'',
        id_district:'1',
        officePost:''
       }
        )
    const onChange =(e)=>{
        
        const { name, value } = e.target;
        setAddHotels(item=>({
            ...item,[name]:value
        }))

       console.log(e.target.value)
    }
//typeApartment
const onChangeTypeApartment =(e)=>{
    const { name, value } = e.target;
        setAddHotels(item=>({
            ...item,[name]:value
        }))
        console.log(name)
}

//how many customer and bath room
    const [customer , setCustomer] = useState(1)
    const [bed , setbed] = useState(1)
   const handlPlusCustomer =()=>{
       
       if(customer <= 8){
            setCustomer(customer+1)
            setAddHotels(item=>({
                ...item,customer:customer+1
            }))
        console.log(customer)
           
       }else{
           console.log("Xin loi vi dang trong mua dich nen so nguoi se bi gioi han")
       }
   }

   const handlminusCustomer =()=>{
    
    if(customer <= 1){
        console.log("Xin loi toi thiu mot phong phai co 1 giuong")
    }else{
        setCustomer(customer-1)
        setAddHotels(item=>({
            ...item,customer:customer-1
        }))
        console.log(customer)
    }
}

const handlPlusBed =()=>{
    
    if(bed <= 8){
        setbed(bed+1)
        setAddHotels(item=>({
            ...item,bed:bed+1
        }))
        console.log(bed)

   }else{
       console.log("Xin loi vi dang trong mua dich nen so nguoi se bi gioi han")
   }
}

const handlminusBed =()=>{

    if(bed <= 1){
        console.log("Xin loi toi thiu mot phong phai co 1 giuong")
    }else{
        setbed(bed-1)
        setAddHotels(item=>({
            ...item,bed:bed-1
        }))
        console.log(bed)
    }
}




// how many bathroom

const [bathRoom , setbathRoom] = useState(1)

const handlPlusBathRoom =()=>{
   
    if(bathRoom <= 8){
        setbathRoom(bathRoom+1)
        setAddHotels(item=>({
            ...item,bathroom:bathRoom+1
        }))
    }else{
        console.log("Xin lỗi quy định của Go phải có ít nhất một phòng tắm")
    }
}

const handlminusbathRoom =()=>{
 
    if(bathRoom <= 1){
        console.log("Xin loi toi thiu mot phong phai co 1 giuong")
    }else{
        setbathRoom(bathRoom-1)
        setAddHotels(item=>({
            ...item,bathroom:bathRoom-1
        }))

        console.log(addHotels.bathroom-1)
    }
}
///where is your house

const onChangeWhereisYourHouse = (e) =>{
    console.log(e.target.value)
    const { name, value } = e.target;
        setAddHotels(item=>({
            ...item,[name]:value
        }))
        
}

    return (
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2  md:grid-cols-2 sm:grid-cols-2" >   
               
         
             
         
            {
                 (props.page == "?item=1")?<TypeApartment object ={setAddHotels} onChange={onChangeTypeApartment}  name="id_type_house"/>:
   
                 (props.page == "?item=2"  )?<HowManyPerson  handlminusBed={handlminusBed} handlPlusBed={handlPlusBed} handlminusCustomer={handlminusCustomer} handlPlusCustomer={handlPlusCustomer} customer={customer} bed={bed}  />:
                 (props.page == "?item=3")?<HowManyBedRoom bathRoom ={bathRoom}  handlPlusBathRoom={handlPlusBathRoom} handlminusbathRoom={handlminusbathRoom} name="bathroom" />  :
                 (props.page == "?item=4")?<WhereIsYourHouse onChangeStreet = {onChangeWhereisYourHouse} onChangeProvined = {onChangeWhereisYourHouse}  onChangePostOffice = {onChangeWhereisYourHouse} /> :
                 (props.page == "?item=5")?<Map/>  :
                 (props.page == "?item=6")?<Image/>  :
                 (props.page == "?item=7")?<Finish sendInfo = {addHotels}/>  :
                 <Location  onchange ={onChange} name="id_city"/>
              }
         
              
          {/* <TypeApartment/> */}
          <div style={{backgroundColor:"ButtonHighlight"}}>
                  <CardMedia
                  className="hidden sm:block"
                      style={{height:"100%",borderRadius:"20px"}}
                      component="img"
                      image="https://res.cloudinary.com/firstsolar/image/upload/v1611888178/appmwphudk8ukhrrnoa2.jpg"
                     
                  />
          </div>
      </div>
    );
};

export default ItemLocation;