import React from 'react'

import headphone from '../../img/headset-outline.svg'
import bag from '../../img/bag-handle-outline.svg'
import statistic from '../../img/stats-chart-outline.svg'
import light from '../../img/book-outline.svg'

const itemList = [
    {
        iconUrl: headphone,
        title: 'Hỗ trợ khách hàng 24/7', 
        description: ' Từ việc thiết lập danh sách của bạn cho đến những lo lắng về khách, nhóm toàn cầu của chúng tôi luôn sẵn sàng hỗ trợ bạn qua điện thoại, email và trò chuyện, mọi bước trong quá trình thực hiện.'
    },
    {
        iconUrl: bag,
        title: 'Các công cụ giúp bạn thành công', 
        description: 'Các công cụ của chúng tôi giúp bạn dễ dàng đặt đúng giá, quản lý đặt chỗ, nhắn tin với khách, nhận thanh toán, theo dõi thu nhập'
    },
    {
        iconUrl: statistic,
        title: 'Thông tin chi tiết được cá nhân hóa', 
        description: 'Chúng tôi sẽ chia sẻ xu hướng du lịch địa phương và đề xuất các cách cải thiện để giúp bạn kiếm được những đánh giá tuyệt vời và phát triển doanh nghiệp của mình.'
    },
    {
        iconUrl: light,
        title: 'Giáo dục và đào tạo', 
        description: 'Tìm hướng dẫn trong Trung tâm tài nguyên, tham gia hội thảo trên web miễn phí về các kiến ​​thức cơ bản về lưu trữ và kết nối với các máy chủ khác trong Trung tâm cộng đồng của chúng tôi.'
    }
]


const Item = ({iconUrl, title, description}) => {
    const styles = {
        display: 'flex',
    }
    const iconStyle = {
        width: '5%',
        flexShrink: 0,
        paddingTop: '30px',
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

const Support = () => {
    const styles = {
        display: 'flex',
        width: '1350px',
        margin: '0 auto',
    }
    const h3Style = {
        width: '40%',
        flexShrink: '0'
    }
    const itemStyle = {
        width: '60%',
        flexShrink: '0'
    }
    return (
        <div style={styles}>
            <h3 style={h3Style}>Chúng tôi ở đây để hỗ trợ bạn </h3>
            <div style={itemStyle}>
            {
                itemList.map(item => <Item {...item}/>)
            }
            </div>
        </div>
    )
}

export default Support;

