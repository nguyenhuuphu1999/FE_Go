import FaceBook from '../../img/facebook-logo.png';
import Twitter from '../../img/twitter-logo.png';
import Instagram from '../../img/instagram-logo.png';
import Momo from '../../img/momo-logo.png';
import AirPay from '../../img/AirPay-logo.png';
import Saigontourist from '../../img/saigon-tourist-logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="top-footer">
                <div className="helps">
                    <p>Trợ giúp</p>
                    <span>Trung tâm trợ giúp</span>
                    <span>Câu hỏi thường gặp</span>
                    <span>Chính sách Bảo mật</span>
                    <span>Chính sách về cookie</span>
                    <span>Điều khoản sử dụng</span>
                </div>
                <div className="about-us">
                    <p>Về chúng tôi</p>
                    <span>PointsMAX</span>
                    <span>Tuyển dụng</span>
                    <span>Báo chí</span>
                    <span>Nhật ký mạng</span>
                </div>
                <div className="travel-destination">
                    <p>Điểm du lịch</p>
                    <span>Quốc gia</span>
                    <span>Thành phố</span>
                </div>
                <div className="partner">
                    <p>Đối tác của</p>
                    <span>chúng tôi</span>
                    <span>Cổng thông tin</span>
                    <span>đối tác YCS</span>
                    <span>Giải pháp đối tác</span>
                    <span>Đối tác liên kết</span>
                    <span>Đối tác kết nối</span>
                </div>
                <div className="download">
                    <p>Tải ứng dụng</p>
                    <span>Ứng dụng iOS</span>
                    <span>Ứng dụng Android</span>
                </div>
            </div>
            <div className="below-footer">
                <div>
                    <span>Mọi nội dung tại đây</span>
                    <span>© 2020 – 2021</span>
                    <span>Công ty TNHH Tư nhân GO. Bảo Lưu Mọi Quyền</span>
                </div>
                <p>GO.vn là thành viên của Tập đoàn Booking Holdings, nhà cung cấp dịch vụ du lịch trực tuyến & các dịch vụ có liên quan hàng đầu thế giới.</p>
                <ul className="partner-logo">
                    <li><img src={AirPay} alt="" /></li>
                    <li><img src={Saigontourist} alt="" /></li>
                    <li><img src={Momo} alt="" /></li>
                </ul>
                <hr/>
                <ul className="connect">
                    <li><span>Kết nối với chúng tôi</span></li>
                    <li><img src={FaceBook} alt="" /></li>
                    <li><img src={Twitter} alt="" /></li>
                    <li><img src={Instagram} alt="" /></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;