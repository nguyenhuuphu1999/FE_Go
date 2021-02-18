import React, { useState } from 'react';
import Input from './Input/index';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AppleIcon from '@material-ui/icons/Apple';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Alert from './Alert/Alerts';

const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 25,
    border: 0,
    color: 'white',
    width:"100%",
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    outline:"none"
  };

 
  


const Login = () => {
    const [data1, setData] = useState(
        {
            email:'',
            passwd:''
        }
    )

    const [err,setErr] = useState(false)
    const [id,setId] = useState('')  
const [loginsuccessfull,setLoginSuccessfull]= useState(false)

    const handleInput = (e) =>{
        const {name,value} = e.target;
        setData(
            setState=>(
            {
                ...setState,[name]:value
            }
        ))
       
      }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(data1)
    //    console.log(process.env.REACT_APP_API_URL +'/login/user')
        axios.post('http://localhost:4001/login/user',data1)
        .then((res)=>{
            console.log(res.data.id)
            setId(res.data.id)
            localStorage.setItem('id',res.data.id)
            localStorage.setItem('keyToken',res.data.access_token);
            
            if(res.data.err == false){
                setLoginSuccessfull(true)
            }else{
                setErr(true)
            }
        })
        .catch((err)=>{
            console.error(err)
        })
    }
    if(loginsuccessfull){
        return <Redirect to={{
            pathname:"/pagehome",
            search:"?id=" + id,
           

        }}/>
    }
  
    return (
            <form method="post"  onSubmit={handleSubmit}  style={{width:'40%', backgroundColor:'ActiveBorder',flexDirection:'column',display:'flex',alignItems:'center', margin:'auto',borderRadius:'15px'}}>
                      {
                          (err)?<Alert status="error" content="Email or password invalied" />:<></>
                      }
                       {
                           (err)? <h2 style={{margin:'20px 0px' , fontWeight:'500',fontSize:'25px'}}>Đăng Nhập</h2>:
                           <h2 style={{margin:'10px 0px' , fontWeight:'500',fontSize:'25px'}}>Đăng Nhập</h2>
                       }
                        <hr width="80%" />
                       <div style={{width:'100%'}}>
                            <div style={{margin:'30px 0px',display:'flex' , justifyContent:'center'}}>
                                <Input place="Email" onChange={handleInput} name="email" />
                            </div>
                            <div style={{margin:'30px 0px',display:'flex' , justifyContent:'center'}}>
                                <Input place="Mật khẩu" onChange={handleInput} name="passwd"/>
                            </div> 
                       </div>
                <div style={{margin:"auto" , marginTop:"20px"}}>
                <Button type="submit" variant="contained" color="primary" style={style}>
                    Đăng nhập
                </Button>
                </div>

                <div>
                       
                    <div style={{marginTop:"30px"}} >
                            <hr width="100%" style={{width:"40%"}} /> 
                            <div style={{marginTop:"-13px",textAlign:'center'}}>Hoặc</div>
                            <hr style={{width:"40%", marginLeft:"auto",marginTop:"-10px"}}></hr>
                    </div>
                    
                    <div style={{marginTop:"10px",fontSize:"20px"}}>
                            <p style={{textAlign:'center'}} >Đăng nhập với</p>
                    </div>

                    <div className="grid sm:grid-cols-1 xl:grid-flow-col-1 " style={{display:'flex',margin:"30px 0px"}}>
                        <FacebookIcon style={{color:"blue",fontSize:"50px",marginLeft:"100px"}}/>
                        <InstagramIcon style={{color:"#f012e6",fontSize:"50px",margin:'0px 30px'}}/>
                        <AppleIcon style={{color:"black",fontSize:"50px",marginRight:"100px"}}/>

                    </div>
                </div>

                </form>
        
      
    );
};

export default Login;