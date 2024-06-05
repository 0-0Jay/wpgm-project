import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import ChallengeCard from './ChallengeCard';
import NicknameChange from './NicknameChange';
import PasswdChange from './PasswdChange';

const URL = 'http://localhost:8099';

function MyPage() {
    const [cardList, setCardList] = useState([]);
    const [cookie, setCookie, removeCookie] = useCookies([]);
    const [showNickModal, setShowNickModal] = useState(false);
    const [showPwModal, setShowPwModal] = useState(false);
    const user_id = {"user_id" : cookie.login.user_id};

    // FUNCTION
    // 닉네임 변경
    const openNickModal = () => {
        setShowNickModal(true);
    };
    
    const closeNickModal = () => {
        setShowNickModal(false);
    };
    
    // 비밀번호 변경
    const openPwModal = () => {
        setShowPwModal(true);
    };
    
    const closePwModal = () => {
        setShowPwModal(false);
    };


    // 참여중인 챌린지 불러오기
    useEffect(() => {
        console.log(cookie.login.user_id);
        const chList = async() => {
            await axios.post(
                URL + '/main/myCh',
                user_id
            )
            .then(response => {
                console.log(response);
                setCardList(response.data);
            })
            .catch(error => {
                console.log("요청 실패");
            });
        };
        chList();
    }, []);

    // 회원 탈퇴
    const deleteId = async() => {
        await axios.post(
            URL + '/user/deleteId',
            user_id
        ).then(response => {
            alert("탈퇴되었습니다.");
            removeCookie("login");
            window.location.reload();
        }).catch(error => {
            console.log("탈퇴 실패");
        })
    }

    return (
        <div>
            <div style={containerStyle}>
                <div style={titleStyle}>
                    내 정보
                </div>
                <div style={contentStyle}>
                    <div>
                        ● 닉네임 : <input type='text' name='limit' style={textBoxStyle} value={cookie.login.nickname} readOnly></input>
                        <button style={buttonStyle} onClick={openNickModal}>닉네임 변경</button>
                        <p />
                    </div>
                    <div>
                        ● 아이디 : <input type='text' name='limit' style={textBoxStyle} value={cookie.login.user_id} readOnly></input>
                        <button style={buttonStyle} onClick={openPwModal}>비밀번호 변경</button>
                        <p />
                    </div>
                    <NicknameChange isOpen={showNickModal} onClose={closeNickModal} />
                    <PasswdChange isOpen={showPwModal} onClose={closePwModal} />
                    <div>
                        <button style={buttonStyle} onClick={deleteId}>회원 탈퇴</button>
                    </div>
                </div>
                <div style={titleStyle}>
                    참여 중인 챌린지
                </div>
                <div style={{display:'flex', flexWrap: 'wrap', height: '36vw', overflowY: 'auto'}}>
                    {cardList.length > 0 ? (
                        cardList.map(ch => (
                            <ChallengeCard key={ch.c_id} CardInfo={ch} menu={2}/>
                        ))
                    ) : (
                        <div style={{
                            color: '#1F4E79',
                            fontSize: '1vw',
                            fontWeight: 'bold',
                            margin: '10% 40% 10% 40%'
                        }}>
                            참여 중인 챌린지가 없습니다.
                        </div>
                    )}
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
    padding: '10px',
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