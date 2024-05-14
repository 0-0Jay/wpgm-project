import logo from '../assets/logo.png';
import React, { useState } from 'react';
import Login from './Login'; // Login 컴포넌트 import
import Join from './Join'; // Join 컴포넌트 import

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [userInfo, setUserInfo] = useState({ user_id: '', nickname: '', })

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

  const logOut = () => {
    alert("로그아웃");
    let copy = {...userInfo};
    copy.nickname = '';
    copy.user_id = '';
    setUserInfo(copy);
    closeJoinModal();
    closeLoginModal();
  };
  // <---------------------------------------->

  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      {userInfo.nickname ? (
        <div>
          <span style={buttonStyle} onClick={logOut}>로그아웃</span>
          <span style={buttonStyle}>{userInfo.nickname} 님</span>
        </div>
      ) : (
        <div>
        {/* 버튼 클릭 시 해당 모달 열기 */}
          <span style={buttonStyle} onClick={openLoginModal}>로그인</span>
          <span style={buttonStyle} onClick={openJoinModal}>회원가입</span>
        {/* 모달 컴포넌트 렌더링 */}
          <Login setUserInfo={setUserInfo} isOpen={showLoginModal} onClose={closeLoginModal} />
          <Join setUserInfo={setUserInfo} isOpen={showJoinModal} onClose={closeJoinModal} />
        </div>
      )}
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