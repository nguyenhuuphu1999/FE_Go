import { React,useEffect,useState } from 'react';
import Button from '@material-ui/core/Button';
import Inpust_select from '../../../Input/inpust_select';
import Radio from '../../../Input/Radio';
import './main.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

const TypeApartment = (props) => {
   
 
    const [optionTypeHouse,setOptionTypeHouse]= useState([])
    const [optionRooms,setOptionRooms]= useState([])
    const env=  process.env.REACT_APP_API_URL;
    useEffect(()=>{
        axios.get(env+"/typeHouse")
        .then((res)=>{
         
            setOptionTypeHouse(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })

      
    },[])

    // const OnChange =(e) =>{
    //     console.log(e)
    // }

    return (
        <div style={{display:'flex', justifyContent:'center' }}>
        <div style={{width:"100%" , padding:"20px" }}>
            <p style={{fontSize:"22px" , marginBottom:"19px"}}>Bạn đang đăng tải loại nhà/phòng cho thuê nào ? </p>
            
           <form style={{display:'flex' , justifyContent:'center' ,flexDirection:'column'}}>

               <div>
                    <p className="boil">Chọn loại chỗ ở</p>
                    <div className="inp" style={{margin:"10px 0px 10px 0px"}}>
                      
                            <Inpust_select option={optionTypeHouse} onChange={props.onChange} name={props.name}></Inpust_select>

                    </div>
               </div>
               

                {/* <div>
                    <p className="boil">Bây giờ hãy chọn cụ thể hơn một chút </p>
                    <select
                            style={{
                                    height:"50px" ,
                                    width:"90%", 
                                    borderRadius:"25px" , 
                                    outline:"none",
                                    fontSize:"16px",
                                    paddingLeft:"30px",
                                    backgroundColor:"#fff",
                                    border:"none"
                                }}
                            > 
                        
                            {
                                (optionRooms != 'undefined' &&optionRooms != null)?
                                optionRooms.map((item,index)=>
                                    <option value={index}>{item.room_details}</option>
                                ):<></>
                            }
                        </select>
                </div>

                <div>
                    <p className="boil">Xác nhận loại chỗ ở cho khách </p>
                    <Inpust_select/>
                </div> */}

                <div>
                        <p className="boil">Bạn có đang cho thuê nhà/phòng trên Go với tư cách
                            công ty không?</p>
                    <div className="displayFlex"> <Radio value="c"/><p>Tôi đón tiếp khách với tư cách doanh nghiệp đã đăng ký</p></div>
                    <div className="displayFlex"> <Radio  value="a"/><p>Tôi đón tiếp khách với tư cách cá nhân hoặc chủ sở hữu duy nhất</p></div>
                </div>
                
                <div>
                    <div>
                        Điều này giúp bạn nhận được các tính năng phù hợp với
                        phong cách đón tiếp khách của mình. Tính năng này sẽ ẩn
                        với khách và không ảnh hưởng đến vị trí của bạn trong kết
                        quả tìm kiếm.
                    </div>
                </div>

            <div style={{padding:"30px"}}>
                    <Link to="/pagehome?item=2">
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