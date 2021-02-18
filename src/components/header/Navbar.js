import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import GoLogo from '../../img/go-logo.png'
import User from '../../img/person-circle-sharp.svg'
import EditIcon from '@material-ui/icons/Edit';
const nav = {
  width: '100%',
  backgroundColor: '#000000',
  height: '76px',
  position: 'fixed',
  color: '#fff',
  padding: '0 30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  top: '0',
  left: '0'
}

const logo = {
  width: '50px',
  height: '50px',
}

const ulStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const liStyle = {
  listStyle: 'none',
  marginLeft: '20px',
}



function Navbar(props) {

  const [pathname,setPathname]= useState()


  useEffect(()=>{
   
   setPathname(window.location.pathname.split('/')[1])
  })


  
  return (
    <nav style={nav}>
        <div style={ulStyle}>
          <i style={liStyle}>
            <Link to="/home"> <img style={logo} src={GoLogo} alt="" /></Link>  
          </i>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link to="/hotels">Khách sạn</Link>
            </li>
            <li style={liStyle}>
              <Link to="/apartments-page">Chỗ ở riêng</Link>
            </li>
            <li style={liStyle}>
              <Link to="/coupons-page">Ưu đãi</Link>
            </li>
          </ul>
        </div>

        <div style={ulStyle}>
        {
          (pathname != "pagehome")?  <Link to="/become-a-partner">Become a part of us</Link>:
          <Button style={{outline:'none',borderRadius:'25px',backgroundColor:'rgba(220,220,220,0.5)'}} type="submit" onClick={props.onClick} variant="contained"><EditIcon/>Chỉnh sửa trang cá nhân</Button>
        }
          <i style={{marginLeft: '30px'}}>
            <img style={logo} src={User} alt="" />
          </i>
        </div>
    </nav>
  )
}

export default Navbar
