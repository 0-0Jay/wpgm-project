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
        console.log(CardInfo);
        let now_value = null;
        let up_value = null;
        let flag = false;
        if (menu == 1) {
            now_value = prompt("현재 진행도를 입력해주세요. 단위 : " + CardInfo.unit, '');
            if (now_value == null) return
            while (1) {
                up_value = prompt("목표를 현재보다 높게 입력해주세요.", "");
                if (parseInt(up_value) > parseInt(now_value)) {
                    flag = 1
                    break
                } else if (up_value == null) {
                    return
                }
            }
        }
        await axios.post(
            'http://localhost:8099/main/joinCh',
            {c_id: CardInfo.c_id, user_id: cookie.login.user_id, now_value: now_value, up_value: up_value}
        )
        .then(response => {
            console.log(response);
            openChatModal();
        })
        .catch(error => {
            console.log(error);
        });
    }

    const updateValue = async() => {
        const now_value = prompt("현재 진행 상황을 입력해주세요.", '');
        if (now_value == null) return;
        console.log(CardInfo.c_id, cookie.login.user_id, now_value);
        await axios.post(
            'http://localhost:8099/user/updateValue',
            {c_id: CardInfo.c_id, user_id: cookie.login.user_id, now_value: now_value}
        )
        .then(response => {
            CardInfo.now_value = now_value;
            console.log(response);
            if (response.data === "OK") {
                alert("갱신 되었습니다!");
            } else if (response.data === 'Good') {
                alert("갱신 되었습니다!");
            } else {
                alert("목표를 달성하였습니다!");
            }
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
                {menu === 1? (
                <div>
                    ● 참가자 : {CardInfo.memcnt} / {CardInfo.limits}
                    <p />
                </div>
                ) : null}
                <div>
                    {CardInfo.comments}
                    <p />
                </div>
                {menu === 2? (
                <div>
                    현재 : <input type='text' name='now_value' style={textBoxStyle} value={CardInfo.now_value} readOnly /><button style={updateStyle} onClick={updateValue}>갱신</button>
                    목표 : {CardInfo.up_value}
                </div>
                ) : null}
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

const textBoxStyle = {
    borderRadius : '5px',
    width: '7vw',
    height:'2vw',
    border: '2px solid #1F4E79',
    fontSize: '1.4vw'
};

const updateStyle = {
    margin: '0px 20px 0px 10px',
    width: '4vw',
    height: '2.5vw',
    borderRadius: '15px',
    border: '2px solid #1F4E79',
    backgroundColor: '#C0E7FE',
    color: '#1F4E79',
    fontSize: '1.1vw',
    fontWeight: 'bold',
};
  
export default ChallengeCard;