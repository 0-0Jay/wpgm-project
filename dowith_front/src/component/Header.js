import logo from '../assets/logo.png';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [cookie, removeCookie] = useCookies([]);

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const closeJoinModal = () => {
    setShowJoinModal(false);
  };

  const logOut = () => {
    alert("로그아웃");
    removeCookie("login");
    window.location.reload();
    closeJoinModal();
    closeLoginModal();
  };
  // <---------------------------------------->

  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
        <div>
          <span style={buttonStyle} onClick={logOut}>로그아웃</span>
          <span style={buttonStyle}>{cookie.login.nickname} 님</span>
        </div>
    </header>
  );
}

  
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px', // 전체적인 패딩 조절
  borderBottom: '2px solid #1F4E79', // 헤더 하단 경계선
  backgroundColor: '#EFF6FF',
  color: '#1F4E79'
};

const logoStyle = {
  maxWidth: '20vw', // 로고 최대 너비 조절
};

const buttonStyle = {
  marginLeft: '40px', // 버튼 간격 조절
  cursor: 'pointer', // 클릭 가능하도록 변경
  fontWeight: 'bold',
  fontSize: '2vw', // vw 단위로 설정하여 웹페이지 가로에 맞춰서 크기 조절
};
  
export default Header;