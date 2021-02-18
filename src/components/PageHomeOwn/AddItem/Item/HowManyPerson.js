import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './main.css';
import Icon from './componentItem/Icon';
import MinimizeIcon from '@material-ui/icons/Minimize';
import AddIcon from '@material-ui/icons/Add';
const HowManyperson = (props) => {
  
    return (
        <div style={{display:'flex', justifyContent:'center' }}>
        <div style={{width:"85%" }}>
            <p style={{fontSize:"22px" , margin:"50px 0px 30px 0px" }}>Chỗ của bạn có thể tiếp đón bao nhiêu khách?</p>
            
           <form style={{display:'flex' , justifyContent:'center' ,flexDirection:'column'}}>

               <div style={{fontSize:"15px" , margin:"10px 0px"}}>
                    <p>Kiểm tra xem nhà bạn có đủ giường cho tất cả khách nghỉ ngơi thoải mái không.</p>

               </div>
               
               <div style={{display:"flex",alignItems:'center' , margin:"30px 0px"}}>
                   <div className="boil" >Khách</div>
                  <div style={{display:'flex', margin:"10px 0px 0px 30px"}}>

                        <Button variant="contained" style={{outline:"none"}} color="primary" onClick={props.handlPlusCustomer}>
                            <AddIcon style={{marginTop:"0px", borderRadius:"-18px"  }} />
                        </Button>

                        <div style={{margin:"0px 30px"}}>
                           {props.customer}
                        </div>

                        <Button variant="contained" style={{outline:"none"}} color="primary" onClick={props.handlminusCustomer}>
                            <MinimizeIcon style={{marginTop:"-16px", borderRadius:"-18px"  }} />
                        </Button>
                  </div>
               </div>

               <div>
                    <p>Khách có thể sử dụng bao nhiêu giường ?</p>

               </div>
               
               <div style={{display:"flex",alignItems:'center' ,margin:"30px 0px"}}>
                   <div className="boil" >Giường</div>
                  <div style={{display:'flex', margin:"10px 0px 0px 30px"}} >
                  {/* <div className="mt-8 md:my-8"> */}

                  <Button variant="contained" style={{outline:"none"}} color="primary" onClick={props.handlPlusBed}>
                            {/* <Icon icon={AddIcon}></Icon> */}
                            <AddIcon style={{marginTop:"0px", borderRadius:"-18px"  }} />
                        </Button>
                        <div style={{margin:"0px 30px"}}>
                           {props.bed}
                        </div>
                        <Button variant="contained" style={{outline:"none"}} color="primary" onClick={props.handlminusBed}>
                            {/* <Icon icon={MinimizeIcon}></Icon> */}
                            <MinimizeIcon style={{marginTop:"-16px", borderRadius:"-18px"  }} />
                            </Button>
                  </div>
               </div>

                
                
            <div style={{padding:"30px"}}>
                    <Link to="/pagehome?item=3">
                        <Button style={{margin:"auto" ,marginTop:"10%", borderRadius:"20px",width:"70%",outline:"none"}} variant="contained" color="secondary">
                            Tiếp tục
                        </Button>
                    </Link>
            </div>
           </form>
        </div>
</div>
    );
};

export default HowManyperson;