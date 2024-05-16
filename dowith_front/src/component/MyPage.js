import React, { useState } from 'react';

function MyPage() {
    return (
        <div>
            <div style={containerStyle}>
                <div style={titleStyle}>
                    내 정보
                </div>
                <div style={contentStyle}>
                    <div>
                        ● 닉네임 : <input type='text' name='limit' style={textBoxStyle} readOnly></input>
                        <button style={buttonStyle}>닉네임 변경</button>
                        <p />
                    </div>
                    <div>
                        ● 아이디 : <input type='text' name='limit' style={textBoxStyle} readOnly></input>
                        <button style={buttonStyle}>비밀번호 변경</button>
                        <p />
                    </div>
                    <button style={buttonStyle}>회원 탈퇴</button>
                </div>
                <div style={titleStyle}>
                    참여 중인 챌린지
                </div>
                <div style={contentStyle}>
                    참여 중인 챌린지가 없습니다.
                </div>
            </div>
        </div>
    );
}

// CSS
const containerStyle = {
    backgroundColor: '#fff',
    padding: '30px',
}

const titleStyle = {
    fontSize: '2.5vw',
    color: '#1F4E79',
    padding: '10px',
    fontWeight: 'bold',
    borderRadius:'30px 30px 0px 0px',
}

const contentStyle = {
    backgroundColor: '#fff',
    padding: '15px',
    color: '#1F4E79',
    fontSize: '1.5vw',
    fontWeight: 'bold',
    borderRadius:'20px',
    border: '3px solid #1F4E79'
}

const buttonStyle = {
    backgroundColor: '#C0E7FE',
    color: '#1F4E79',
    borderRadius: '20px', // 모서리가 둥근 사각형
    fontSize: '1vw', // 글자 크기는 2vw
    padding: '0.25vw 1vw', // 버튼 크기는 글자 크기에 맞춰 조정
    width:'9vw',
    height: '2.5vw',
    margin: '0px 0px 0px 5px',
    border: '2px solid #1F4E79', // 테두리 설정
    cursor: 'pointer', // 커서를 포인터로 변경하여 클릭 가능하다는 표시
    fontWeight: 'bold',
}

const textBoxStyle = {
    borderRadius : '5px',
    width: '15vw',
    height:'2vw',
    border: '2px solid #1F4E79',
    fontSize: '1.4vw'
}

export default MyPage;