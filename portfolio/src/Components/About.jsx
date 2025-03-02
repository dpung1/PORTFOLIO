import React from 'react';
import { 
    FaAddressCard,
    FaEnvelope, 
    FaLink, 
    FaMapMarkerAlt, 
    FaPhoneAlt, 
    FaRegCalendarAlt, 
    FaSchool
} from "react-icons/fa";

const About = () => {
    return (
        <section className='sectionContent'>
            <div className='sectionTitle'>
                <FaLink style={{ cursor: 'pointer' }} />
                <h3>ABOUT ME</h3>
            </div>
            <div className='aboutContent'>
                <div>
                    <FaAddressCard />
                    <label>이름</label>
                    <label>정대풍</label>
                </div>
                <div>
                    <FaRegCalendarAlt />
                    <label>생년월일</label>
                    <label>1999.01.01</label>
                </div>
                <div>
                    <FaMapMarkerAlt />
                    <label>위치</label> 
                    <label>서울특별시 강남구</label>
                </div>
                <div>
                    <FaPhoneAlt />
                    <label>연락처</label>
                    <label>010-1234-5678</label>
                </div>
                <div>
                    <FaEnvelope />
                    <label>이메일</label>
                    <label>dangdang@gmail.com</label>
                </div>
                <div>
                    <FaSchool />
                    <label>학력</label>
                    <label>학력</label>
                </div>
            </div>
            <button className='moreButton'>
                자기소개서 ↓
            </button>
        </section>
    );
};

export default About;