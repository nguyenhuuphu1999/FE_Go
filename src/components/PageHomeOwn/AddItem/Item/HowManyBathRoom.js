import {React,useState} from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './main.css';
import Icon from './componentItem/Icon';
import MinimizeIcon from '@material-ui/icons/Minimize';
import AddIcon from '@material-ui/icons/Add';
const HowManyBedRoom = (props) => {
  
 
    return (
        <div style={{display:'flex', justifyContent:'center' }}>
        <div style={{width:"85%" }}>
            <p style={{fontSize:"22px" , margin:"50px 0px 30px 0px" }}>Có bao nhiêu phòng tắm?</p>
            
           <form style={{display:'flex' , justifyContent:'center' ,flexDirection:'column'}}>

               <div style={{fontSize:"15px" , margin:"10px 0px"}}>
                    <p>Tính phòng tắm không có vòi sen hoặc bồn tắm là phòng vệ sinh cơ bản.</p>

               </div>
               
               <div style={{display:"flex" ,alignItems:"center" , margin:"30px 0px"}}>
                   <div className="boil" >Phòng tắm</div>
                   <div style={{display:'flex', margin:"10px 0px 0px 50px"}}>

                    <Button variant="contained" style={{outline:"none"}} color="primary" onClick={props.handlPlusBathRoom}>
                        <AddIcon style={{marginTop:"0px", borderRadius:"-18px"  }} />
                    </Button>

                    <div style={{margin:"0px 30px"}}>
                    {props.bathRoom}
                    </div>

                    <Button variant="contained" style={{outline:"none"}} color="primary" onClick={props.handlminusbathRoom}>
                        <MinimizeIcon style={{marginTop:"-16px", borderRadius:"-18px"  }} />
                    </Button>
                    </div>
               </div>

               <div>
                

               </div>
             
            <div style={{padding:"30px"}}>
            <Link to="/pagehome?item=7">
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

export default HowManyBedRoom;