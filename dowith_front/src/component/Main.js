import logo from '../assets/logo3.png';
import React, { useState } from 'react';
import Login from './Login'; // Login 컴포넌트 import
import Join from './Join'; // Join 컴포넌트 import

function Main() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  // FUNCTION
  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const openJoinModal = () => {
    setShowJoinModal(true);
  };

  const closeJoinModal = () => {
    setShowJoinModal(false);
  };
  // <---------------------------------------->

  return (
      <div style={mainStyle}>
        <div style={welcomeStyle}>Welcome to DoWith</div>
        <div style={{display:'flex'}}>
          <img src={logo} alt="DoWith" style={logoStyle} />
          {/* 버튼 클릭 시 해당 모달 열기 */}
          <div style={buttonContainer}>
            <button style={buttonStyle} onClick={openLoginModal}>로그인</button>
            <button style={buttonStyle} onClick={openJoinModal}>회원가입</button>
          </div>
          {/* 모달 컴포넌트 렌더링 */}
          <Login isOpen={showLoginModal} onClose={closeLoginModal} />
          <Join isOpen={showJoinModal} onClose={closeJoinModal} />
        </div>
      </div>
  );
}
  
const mainStyle = {
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px', // 전체적인 패딩 조절
  backgroundColor: '#EFF6FF',
  color: '#1F4E79',
  height: '100vh'
};

const logoStyle = {
  width:'51vw', // 로고 최대 너비 조절
  height:'17vw'
};

const buttonStyle = {
  cursor: 'pointer', // 클릭 가능하도록 변경
  fontWeight: 'bold',
  fontSize: '2vw', // vw 단위로 설정하여 웹페이지 가로에 맞춰서 크기 조절
  backgroundColor: '#C0E7FE',
  width: '20vw',
  height:'4vw',
  margin: '20px',
  border: '0px',
  color: '#1F4E79',
  borderRadius: '30px'
};

const welcomeStyle = {
  fontSize: '6vw', // vw 단위로 설정하여 웹페이지 가로에 맞춰서 크기 조절
  margin: '30px'
}

const buttonContainer = {
  display: 'flex',
  flexDirection: 'column'
}
  
export default Main;