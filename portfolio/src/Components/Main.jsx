import React from 'react';

const Main = () => {
    return (
        <section style={{ position: 'relative', height: '100vh' }}>
            <div className='mainLayout' style={{ height: '100%' }}>
                <h1>웹 개발자 포트폴리오</h1>
                <hr className='headerLine'/>
                <h2>
                    안녕하세요. <br /> 웹 개발자 정대풍입니다.
                </h2>
                <button className='moreButton'>
                    더 알아보기 ↓
                </button>
            </div>
        </section>
    );
};

export default Main;