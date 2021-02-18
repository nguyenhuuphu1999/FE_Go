import React from 'react'

import houseIcon from '../../img/house.svg'
import lightIcon from '../../img/light.svg'
import book from '../../img/book-outline.svg'
import star from '../../img/star-outline.svg'
import calendar from '../../img/calendar.svg'

const itemList = [
    {
        iconUrl: houseIcon,
        title: 'Toàn bộ ngôi nhà', 
        description: 'Anh sẽ có căn hộ cho riêng mình.'
    },
    {
        iconUrl: lightIcon,
        title: 'Nâng cao sạch', 
        description: 'Máy chủ này cam kết quá trình làm sạch nâng cao 5 bước của GO. Tìm hiểu thêm'
    },
    {
        iconUrl: book,
        title: 'Quy tắc nhà ở', 
        description: 'Chủ nhà không cho phép vật nuôi, tiệc tùng hoặc hút thuốc. Nhận thông tin chi tiết'
    },
    {
        iconUrl: star,
        title: 'Chủ nhà giàu kinh nghiệm', 
        description: ' Có 120 đánh giá từ những nơi khác.'
    },
    {
        iconUrl: calendar,
        title: 'Chính sách hủy đặt phòng', 
        description: 'Thêm ngày chuyến đi của bạn để biết chi tiết hủy đặt phòng cho kỳ nghỉ này.'
    }
]


const Item = ({iconUrl, title, description}) => {
    const styles = {
        display: 'flex',
        width: '18%',
        padding: '10px 10px',
        fontSize: '16px',
    }
    const iconStyle = {
        width: '15%',
        flexShrink: 0,
        marginRight: '25px',
    }
    return (
        <div style={styles}>
            <i style={iconStyle}><img style={{width: '100%'}} src={iconUrl} alt=""/></i>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

const Policies = () => {
    const styles = {
        width: '1350px',
        margin: '0 auto',
        borderBottom: '2px solid gray',
        borderLeft: '0.5px solid gray',
        borderRight: '0.5px solid gray',
    }
    const itemStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
    return (
        <div style={styles}>
            <div style={itemStyle}>
            {
                itemList.map(item => <Item {...item}/>)
            }
            </div>
        </div>
    )
}

export default Policies;

