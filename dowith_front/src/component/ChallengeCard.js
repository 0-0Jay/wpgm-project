import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Chat from './Chat';

function ChallengeCard({CardInfo, menu}) {
    const endtime = CardInfo.endtime
    const [showChatModal, setShowChatModal] = useState(false);
    const [cookie] = useCookies([]);

    const openChatModal = () => {
        setShowChatModal(true);
    };
    
    const closeChatModal = () => {
        setShowChatModal(false);
    };

    const leaveCh = async() => {
        await axios.post(
            'http://localhost:8099/main/leaveCh',
            {c_id : CardInfo.c_id, user_id: cookie.login.user_id}
        )
        .then(response => {
            console.log(response);
            alert("챌린지에서 탈퇴하였습니다.");
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
    }

    const joinCh = async() => {
        await axios.post(
            'http://localhost:8099/main/joinCh',
            {c_id: CardInfo.c_id, user_id: cookie.login.user_id}
        )
        .then(response => {
            console.log(response);
            openChatModal();
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>
                {CardInfo.title}
                <button style={buttonStyle} onClick={joinCh}>{menu === 1? '참가하기' : '입장하기'}</button>
                {menu === 2? (<span style={closeButtonStyle} onClick={leaveCh}>×</span>) : null}
                <Chat isOpen={showChatModal} onClose={closeChatModal} c_id={CardInfo.c_id} title={CardInfo.title}/>
            </div>
            <div style={contentStyle}>
                <div>
                    ● 목표 기한 : {endtime.substring(0,4) + "년 " + endtime.substring(5, 7) + "월" + endtime.substring(8, 10) + "일"}
                    <p />
                </div>
                <div>
                    ● 참가자 : {CardInfo.memcnt} / {CardInfo.limits}
                    <p />
                </div>
                <div>
                    {CardInfo.comments}
                    <p />
                </div>
                <div>
                    <br />
                    <button style={tagStyle} name='tags' value={CardInfo.tags}>{CardInfo.tags}</button>
                </div>
            </div>
        </div>
    );
}

// CSS
const containerStyle = {
    backgroundColor: '#fff',
    padding: '10px',
}

const titleStyle = {
    backgroundColor: '#EFF6FF',
    fontSize: '2vw',
    color: '#1F4E79',
    padding: '10px 20px 20px 20px',
    fontWeight: 'bold',
    borderRadius:'20px 20px 0px 0px',
    border: '3px solid #1F4E79',
    width: '30vw',
    height: '2vw',
    display: 'flex'
}

const contentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    color: '#1F4E79',
    fontSize: '1.5vw',
    fontWeight: 'bold',
    borderRadius:'0px 0px 20px 20px',
    border: '3px solid #1F4E79',
    margin: '-3px 0px 0px 0px',
    width: '30vw',
    height: '15vw'
}

const closeButtonStyle = {
    fontSize: '2vw',
    cursor: 'pointer',
    fontWeight: 'bold',
    padding: '0px 0px 0px 1vw',
    color: 'red'
};

const buttonStyle = {
    backgroundColor: '#C0E7FE',
    color: '#1F4E79',
    borderRadius: '20px', // 모서리가 둥근 사각형
    fontSize: '1.5vw', // 글자 크기는 2vw
    padding: '0.25vw 1vw', // 버튼 크기는 글자 크기에 맞춰 조정
    width:'10vw',
    height: '3vw',
    margin: '0px 0px 0px 10px',
    border: '2px solid #1F4E79', // 테두리 설정
    cursor: 'pointer', // 커서를 포인터로 변경하여 클릭 가능하다는 표시
    fontWeight: 'bold',
    marginLeft:'auto'
};
const tagStyle = {
    backgroundColor: '#C0E7FE',
    color: '#1F4E79',
    borderRadius: '20px', // 모서리가 둥근 사각형
    fontSize: '1.3vw', // 글자 크기는 2vw
    padding: '0.25vw 1vw', // 버튼 크기는 글자 크기에 맞춰 조정
    width:'8vw',
    height: '3vw',
    border: '2px solid #1F4E79', // 테두리 설정
    cursor: 'pointer', // 커서를 포인터로 변경하여 클릭 가능하다는 표시
    fontWeight: 'bold',
    marginLeft:'auto'
};
  
export default ChallengeCard;