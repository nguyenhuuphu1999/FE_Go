import React from 'react'
import banner from '../../img/partner-banner.png'
import Button from '@material-ui/core/Button';
import RegisterBtn from './RegisterBtn'
import LogInBtn from './LogInBtn';
const Banner2 =     () => {
    const imgStyle = {
        width: '100%',
        height: '100vh'
    }
 
    return (
        <div style={imgStyle}>
            <img style={imgStyle}  src={banner} alt=""/>
            <div style={{position:'absolute', top : 150 ,left:150, width:"350px",color:"#fff"}}>
                <div>
                    <h1>Đăng ký ngay hôm nay</h1>
                    <h4 style={{fontWeight:200}}>Để trở thành 1 phần mạng lưới nhà nghỉ, khách sạn của chúng tôi</h4>
                </div>
                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <div style={{marginTop:"50px",width:"225px"}}>
                        <div>
                        <RegisterBtn />
                        </div>
                    <div style={{margin:"30px 7px 30px 85px"}}>
                        Hoặc
                    </div>
                    <div>
                        <LogInBtn/>
                    </div>
                </div>

                  
                </div>
            </div>
        </div>
    )
}

export default Banner2
