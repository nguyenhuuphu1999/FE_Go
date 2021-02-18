import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Inpust_select from '../../../Input/inpust_select';
import Input from '../../../Input/index';

import Radio from '../../../Input/Radio';
import './main.css';
import { Link } from 'react-router-dom'
import AddBoxIcon from '@material-ui/icons/AddBox';
const TypeApartment = () => {
   const [image , setImage] = useState([]);
   const onImageChange = (e) =>{
      if(e.target.files && e.target.files[0]){
        // console.log("e.target.files[0]")
        let img = e.target.files[0];
        var reader = new FileReader();
        var url =reader.readAsDataURL(img);
        console.log(url)
        setImage(url)
      }
   }
    return (
        <div style={{display:'flex', justifyContent:'center' }}>
        <div style={{width:"85%" }}>
            <p style={{fontSize:"22px" , margin:"29px 0px" }}>Thêm ảnh cho căn hộ của bạn ?</p>
            
           <form style={{display:'flex' , justifyContent:'center' ,flexDirection:'column'}}  >
           <input type="file" name="myImage" onChange={onImageChange} multiple  />
              
            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2  md:grid-cols-2 sm:grid-cols-2">
            <img src={image} />
                {/* <div >
                    <Button variant="contained" color="none" style={{outline:"none" , marginTop:"20px",marginLeft:"10%"}}>
                        <AddBoxIcon style={{color:"#D5D5EE",height:"100%" , width:"100%"}}></AddBoxIcon>
                    </Button>
                </div>

                <div >
                    <Button variant="contained" color="none" style={{outline:"none" , marginTop:"20px",marginLeft:"10%"}}>
                        <AddBoxIcon style={{color:"#D5D5EE",height:"100%" , width:"100%"}}></AddBoxIcon>

                    </Button>
                </div>

                <div >
                    <Button variant="contained" color="none" style={{outline:"none" , marginTop:"20px",marginLeft:"10%"}}>
                    <AddBoxIcon style={{color:"#D5D5EE",height:"100%" , width:"100%"}}></AddBoxIcon>

                    </Button>
                </div>

                <div >
                  
                   <Button variant="contained" color="none" style={{outline:"none" , marginTop:"20px",marginLeft:"10%"}}>
                    <AddBoxIcon style={{color:"#D5D5EE",height:"100%" , width:"100%"}}></AddBoxIcon>
                     <input type="file"/>
                    </Button>
                </div> */}
             
            </div>
             

            <div style={{padding:"30px"}}>
                    <Link to="/pagehome?item=7">
                        <Button style={{margin:"auto" ,marginTop:"10%", borderRadius:"20px",width:"100%",outline:"none"}} variant="contained" color="secondary">
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