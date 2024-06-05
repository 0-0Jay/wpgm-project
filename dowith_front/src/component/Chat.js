import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Message from './Message';

function Chat({isOpen, onClose, c_id, title}) {
  const [cookie] = useCookies([]);
  const [chatList, setChatList] = useState([]);
  const [formData, setFormData] = useState({
    user_id: cookie.login.user_id, c_id: c_id, chat:''
  });
  const chatEnd = useRef(null);

  // FUNCTION
  useEffect(() => {
    if (isOpen) {
      console.log("open");
      const getChatList = async() => {
        await axios.get(
          'http://localhost:8099/main/chat/' + c_id
        )
        .then(response => {
          console.log(response);
          setChatList(response.data);
        })
        .catch(error => {
          console.log("요청 실패");
        });
      };
      getChatList();
    }
  }, [c_id, isOpen]);

  useEffect(() => {
    if (chatEnd.current) {
      chatEnd.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [chatList]);
  
  if (!isOpen) return null;

  const inputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    });
  };

  const addChat = async() => {
    if (formData.chat) {
      console.log("addChat 호출됨");
      await axios.post(
        'http://localhost:8099/main/addChat',
        formData
      )
      .then(response => {
        setChatList(response.data);
        setFormData({
          ...formData,
          chat: ''
        })
      })
      .catch(error => {
        console.log("요청 실패" + error);
      });
    }
  }

  const enterKey = (e) => {
    if (e.key === 'Enter') {
      addChat();
    }
  }

  // <---------------------------------------->

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <div style={titleStyle}>
          {title} 
          <span style={closeButtonStyle} onClick={onClose}>×</span>
        </div>
        <div style={contentStyle}>
          <div style={chatStyle}>
            {chatList && chatList.map((it) => (
              <Message key={it.chat_id} chat_id={it.chat_id} nickname = {it.nickname} chat={it.chat}  />
            ))}
            <div ref={chatEnd} />
          </div>
          <div>
            <input style={chatInputStyle} type='text' name='chat' onChange={inputChange} onKeyDown={enterKey} placeholder="채팅을 입력하세요..." value={formData.chat}/>
            <button style={buttonStyle} onClick={addChat}>입력</button>
          </div>
        </div>  
      </div>
    </div>
  );
}

// CSS
const modalStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  position: 'relative',
  backgroundColor: '#fff',
  fontWeight: 'bold',
  fontSize: '2vw', // vw 단위로 설정하여 웹페이지 가로에 맞춰서 크기 조절
  borderRadius:'10%',
  zIndex: '-1'
};

const closeButtonStyle = {
  fontSize: '2vw',
  position: 'absolute',
  top: '5px',
  right: '5px',
  cursor: 'pointer',
  padding: '0.4vw 1vw',
  fontWeight: 'bold',
};

const titleStyle = {
  backgroundColor: '#EFF6FF',
  fontSize: '3vw',
  color: '#1F4E79',
  padding: '2vw',
  fontWeight: 'bold',
  borderRadius:'20px 20px 0px 0px',
  border: '3px solid #1F4E79',
  width: '60vw',
  height: '4vw',
  display: 'flex'
}

const contentStyle = {
  backgroundColor: '#fff',
  padding: '2vw',
  color: '#1F4E79',
  fontSize: '1.5vw',
  fontWeight: 'bold',
  borderRadius:'0px 0px 20px 20px',
  border: '3px solid #1F4E79',
  margin: '-3px 0px 0px 0px',
  height: '42vw'
}

const chatStyle = {
  backgroundColor: '#FFF',
  height: '36vw',
  overflowY: 'auto'
}

const chatInputStyle = {
  backgroundColor: '#FFF',
  borderRadius : '5px',
  border: '3px solid #1F4E79',
  width: '51vw',
  height:'3vw',
  margin: '2vw 10px 0px 0px'

}

const buttonStyle = {
  backgroundColor: '#C0E7FE',
  color: '#1F4E79',
  borderRadius: '20px', // 모서리가 둥근 사각형
  fontSize: '1.5vw', // 글자 크기는 2vw
  padding: '0.25vw 1vw', // 버튼 크기는 글자 크기에 맞춰 조정
  width:'7vw',
  height: '3.6vw',
  margin: '0px 0px 0px 10px',
  border: '2px solid #1F4E79', // 테두리 설정
  cursor: 'pointer', // 커서를 포인터로 변경하여 클릭 가능하다는 표시
  fontWeight: 'bold',
  marginLeft:'auto'
};

export default Chat;