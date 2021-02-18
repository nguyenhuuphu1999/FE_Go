import React from 'react';
import Button from '@material-ui/core/Button';
import Inpust_select from '../../../Input/inpust_select';
import Input from '../../../Input/index';

import Radio from '../../../Input/Radio';
import './main.css';
import { Link } from 'react-router-dom'

const TypeApartment = (props) => {
   


    return (
        <div style={{display:'flex', justifyContent:'center' }}>
        <div style={{width:"100%" ,padding:'20px' }}>
            <p style={{fontSize:"22px" , marginBottom:"19px"}}>Nhà/phòng cho thuê của bạn ở đâu? </p>
            
           <form style={{display:'flex' , justifyContent:'center' ,flexDirection:'column'}}>
                <p className="boil">Khách sẽ chỉ nhận được địa chỉ chính xác của bạn sau khi hoàn tất đặt phòng.</p>
               <div>
                    <p className="boil">Quốc gia/Khu vực</p>
                    <Inpust_select  />
               </div>
               

                <div>
                    <p className="boil">Đường/phố</p>
                    <Input  onChange= {props.onChangeStreet} name="street"/>
                </div>

               
                <div>
                    <p className="boil">Thành Phố/ Tỉnh </p>
                    <Input onChange= {props.onChangeProvined} name = "provined"/>
                </div>

                <div>
                    <p className="boil">Mã bưu chính </p>
                    <Input onChange= {props.onChangePostOffice} name = "officePost"/>
                </div>
               

            <div style={{padding:"30px"}}>
                    <Link to="/pagehome?item=5">
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

export default TypeApartment;