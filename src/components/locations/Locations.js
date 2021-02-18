import React from 'react'

const location = {
  location: 'Ha Noi',
  image_url:
    'https://s3-alpha-sig.figma.com/img/7680/0c47/3d054b907951e5b2a564e2428f81003d?Expires=1611532800&Signature=d6qCh4bABWQRj1QWN776UAsj1wewnxIQQxshN4kFWArQpPoLQHsW51s66F9g1NGMYmnYDeguAt~eMHF4hEU4bSJoJ-xXLI4g6mM-OlQXUSjntYVwnpWV4r5o5q3FSkTUq3mw8AKXmKlKyD93RazCzXzpn2EwbovL1Y7vTlhVNVBbwxfd1elwGXxS5zYHpSmrr76wG00w2iEyNDwBWYk-NCT3pGGWWhIibq2Fy9Lo4O65yCQKaNEw36myi9oF2IxVoRDov14qTwXcI~n5hcEsNmXu01WsAqLf34hH~9LR08ewgEU3Z8XIPkEhAFTQZ-HNIpBKfSYtnonr-GjFPWBEmw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  amount: 1234,
  description:
    'Hà nội là nơi có lịch sử lâu đời ở Việt nam với hơn 1000 năm văn hóa lịch sử với nhiều khu di tích lịch sử nổi tiếng như: phố cổ Hà Nội , thành thăng long , văn miếu Quốc Tử Giám, hồ hoàn kiếm,... Hằng năm thu hút hàng triệu du khách trong nước và ngoài nước đến tham quan.',
}

export default function Locations() {
  return (
    <div>
      <Location {...location} />
    </div>
  )
}

const Location = ({ image_url, location, amount, description }) => {
  const container = {
    maxWidth: '1350px',
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'center',
    margin: ' 0 auto'
  }
  const leftBlock = {
      marginLeft: '27px',
  }
  const paddingTop = {
      paddingTop: '20px'
  }
  
  return (
    <div style={container}>
      <div>
        <img style={{borderRadius: '30px'}} src={image_url} alt="" />
      </div>
      <div style={leftBlock}>
        <h3 style={paddingTop}>{location}</h3>
        <div style={paddingTop}>{amount}</div>
        <div style={paddingTop}>{description}</div>
      </div>
    </div>
  )
}
