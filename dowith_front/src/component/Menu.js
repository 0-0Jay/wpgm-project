import React, { useState } from 'react';

function Menu({setMenu}) {
    const [isChallengeClicked, setIsChallengeClicked] = useState(false);
    const [isRegisterClicked, setIsRegisterClicked] = useState(false);
    const [isMyPageClicked, setIsMyPageClicked] = useState(false);

    // FUNCTION
    const handleChallengeButtonClick = () => {
        if (!isChallengeClicked) {
            setIsChallengeClicked(true);
            setIsRegisterClicked(false); // 다른 메뉴 클릭 해제
            setIsMyPageClicked(false);
            setMenu(0);
        }
    };

    const handleRegisterButtonClick = () => {
        if (!isRegisterClicked) {
            setIsRegisterClicked(true);
            setIsChallengeClicked(false); // 다른 메뉴 클릭 해제
            setIsMyPageClicked(false)
            setMenu(1);
        }
    };

    const handleMyPageButtonClick = () => {
        if (!isMyPageClicked) {
            setIsMyPageClicked(true);
            setIsRegisterClicked(false);
            setIsChallengeClicked(false); // 다른 메뉴 클릭 해제
            setMenu(2);
        }
    };
    // <---------------------------------------->

    return (
        <div style={menuStyle}>
            <div style={menuItemStyle}>
                <span
                    style={isChallengeClicked ? clickedLinkStyle : linkStyle}
                    onClick={handleChallengeButtonClick}
                >
                    진행 중 챌린지
                </span>
            </div>
            <div style={menuItemStyle}>
                <span
                    style={isRegisterClicked ? clickedLinkStyle : linkStyle}
                    onClick={handleRegisterButtonClick}
                >
                    챌린지 등록
                </span>
            </div>
            <div style={menuItemStyle}>
                <span
                    style={isMyPageClicked ? clickedLinkStyle : linkStyle}
                    onClick={handleMyPageButtonClick}
                >
                    마이페이지
                </span>
            </div>
        </div>
    );
}

// CSS
const menuStyle = {
    display: 'flex',
    flexDirection: 'column', // 세로로 배치
    alignItems: 'center',
    padding: '15px', // 전체적인 패딩 조절
    borderRight: '2px solid #1F4E79', // 우측 경계선 조절
    height: '100vh', // 웹페이지 세로 길이
    color: '#1F4E79', // 글자색
    backgroundColor: '#C0E7FE', // 배경색
};

const menuItemStyle = {
    marginBottom: '20px', // 각 메뉴 아이템 사이 간격
};

const linkStyle = {
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.7vw', // vw 단위로 설정하여 웹페이지 가로에 맞춰서 크기 조절
};

const clickedLinkStyle = {
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '2vw', // vw 단위로 설정하여 웹페이지 가로에 맞춰서 크기 조절
};

export default Menu;
