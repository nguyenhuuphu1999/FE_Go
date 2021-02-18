import React from 'react'

const item = 
  {
    apartment_name: 'Bamboo House Serviced Apartment',
    title: 'Chung cư 56 m² 1 phòng ngủ, 1 phòng tắm riêng ở Quận 1',
    rating: '4 sao',
    address: '235, đường Hoàng Văn Thụ, Quận 1, Hồ Chí Minh',
    price: '550.000 VND',
    img1:
      'https://s3-alpha-sig.figma.com/img/72ed/cad8/0bc660f822ca1fedb3e4be9a2ad9dee2?Expires=1612137600&Signature=NGjf5pxVhxXoENk4W78Aq8RGgRnYjmijPKHOdgAanJzCIQCu37tE1Td2TQFADfISukK~21XNzITv7xJIgYWEIMkHr1948mpeY5nepovXbQDMQl9mUuLrEExM9yVMD1BnBN8Po~iZ77-8ejP9khCoBYBYdTJaJ67-L1uVHPQ7gZV7VImVNo7XNdF4wkVmcbliet8xDDG2tTtBuJ1Gif0G77bP5bpO68Ap0iPFeNwXw9H256HZVMP~wnCiruNUsvBfCJBcjf324exkZb1guUJIo~1BUONqDySAjtxggXXQfLHbJwL7xZLCmirhub-OhGKKTHGjdow-8pdmDj35Qv4ANA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    img2:
      'https://s3-alpha-sig.figma.com/img/6945/19b7/7f0f65d6c0cdda1a01a7485462a09c08?Expires=1612137600&Signature=Sw0Ku2p~VeMjSYzfTveAuQlzIXQBNZosSGtO-YN1q-TMP2xY4VoE7EohoiTdK4-g5BCb1TzCCCbIvFgefM48pN0DoYH3enoFHGgoLGZix7pNLU41yCHSSI1KB0daOFmu9MwZBucBBid094Z1WHjZ13V5jMp~nkxN6zSqM7~4iS0ybcWsk~UCQOuwvi8mo3MElH8h4uA4wkqFMcoZ6bVMLiEwEnU9j3aZVxoPtKYlamih9zLf2vavLBG4odd-910sAAAcUX9M62fSL4afVaKcM-jjdd0WI1Wi9d82S4F0zGI0-G-St8KjnqG2g0LCqbGg0QkNAjpV3ujWuvThNG~ifg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    img3:
      'https://s3-alpha-sig.figma.com/img/6945/19b7/7f0f65d6c0cdda1a01a7485462a09c08?Expires=1612137600&Signature=Sw0Ku2p~VeMjSYzfTveAuQlzIXQBNZosSGtO-YN1q-TMP2xY4VoE7EohoiTdK4-g5BCb1TzCCCbIvFgefM48pN0DoYH3enoFHGgoLGZix7pNLU41yCHSSI1KB0daOFmu9MwZBucBBid094Z1WHjZ13V5jMp~nkxN6zSqM7~4iS0ybcWsk~UCQOuwvi8mo3MElH8h4uA4wkqFMcoZ6bVMLiEwEnU9j3aZVxoPtKYlamih9zLf2vavLBG4odd-910sAAAcUX9M62fSL4afVaKcM-jjdd0WI1Wi9d82S4F0zGI0-G-St8KjnqG2g0LCqbGg0QkNAjpV3ujWuvThNG~ifg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    img4:
      'https://s3-alpha-sig.figma.com/img/6945/19b7/7f0f65d6c0cdda1a01a7485462a09c08?Expires=1612137600&Signature=Sw0Ku2p~VeMjSYzfTveAuQlzIXQBNZosSGtO-YN1q-TMP2xY4VoE7EohoiTdK4-g5BCb1TzCCCbIvFgefM48pN0DoYH3enoFHGgoLGZix7pNLU41yCHSSI1KB0daOFmu9MwZBucBBid094Z1WHjZ13V5jMp~nkxN6zSqM7~4iS0ybcWsk~UCQOuwvi8mo3MElH8h4uA4wkqFMcoZ6bVMLiEwEnU9j3aZVxoPtKYlamih9zLf2vavLBG4odd-910sAAAcUX9M62fSL4afVaKcM-jjdd0WI1Wi9d82S4F0zGI0-G-St8KjnqG2g0LCqbGg0QkNAjpV3ujWuvThNG~ifg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
  }




// const {apartment_name, title, rating, address, price, img1, img2, img3, img4} = {item}
const ApartmentDetail = () => {

  const {apartment_name, title, rating, address, price, img1, img2, img3, img4} = {...item}

  const container = {
    display: 'grid',
    gridTemplateColumn: 'repeat(4, 1fr)',
    gridTemplateRow: 'repeat(4, 1fr)',
    width: '1350px',
    height: '484px',
    gap: '14px 14px',
    margin: '14px auto'
  }
  
  const gallery1 = {
    gridArea: '1 / 1 / 3 / 3'
  }
  const gallery2 = {
    gridArea: '1 / 3 / 2 / 5'
  }
  
  const imgStyle = {
    width: '100%',
    height: '100%'
  }

  const txtStyle = {
    marginTop: '127px',
  }

  return (
    <div className="ApartmentDetail" style={{width: '1350px' }}>
      <div className="grid-container" style={container}>
        <div className="gallery1" style={gallery1}>
          <img style={imgStyle} src={img1} alt="" />
        </div>
        <div className="gallery2" style={gallery2}>
          <img style={imgStyle} src={img2} alt="" />
        </div>
        <div style={{ width: '100%' }}>
          <img style={imgStyle} src={img3} alt="" />
        </div>
        <div style={{ width: '100%' }}>
          <img style={imgStyle} src={img4} alt="" />
        </div>
      </div>
      <div style={txtStyle}>
        <h3>{apartment_name}</h3>
        <p>{title}</p>
        <div>
          <span style={{marginRight: '20px'}}>{rating}</span>
          <span style={{color: 'blue'}}>{address}</span>
        </div>
        <div style={{marginTop: '20px', color: 'red'}}>Giá chỉ từ: {price}</div>
      </div>
    </div>
  )
}

export default ApartmentDetail
