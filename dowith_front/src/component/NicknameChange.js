import React, {useState} from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

function NicknameChange({isOpen, onClose}) {
  const [cookie, setCookie, removeCookie] = useCookies([]);
  const [formData, setFormData] = useState({user_id: '', nickname: '', });

  // FUNCTION
  const inputChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  }

  const changeNick = async() => {
    console.log(formData);
    setFormData({
      ...formData,
      ['user_id'] : cookie.login.user_id,
    })

    await axios.post(
      'http://localhost:8099/user/changeNick',
      formData
    )
    .then(response => {
      console.log(response)
      alert("닉네임이 변경되었습니다.");
      setCookie("login", formData, {path: "/", expires: new Date(Date.now() + 3600 * 1000)});
      window.location.reload();
    })
    .catch(error => {
      alert("변경 실패. 이미 존재하는 닉네임입니다.");
    });
  };

  if (!isOpen) return null;
  // <---------------------------------------->

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <span style={closeButtonStyle} onClick={onClose}>×</span>
        <p style={{textAlign: 'center'}}>닉네임 변경</p>
        <table style={{textAlign: 'center'}}>
          <tbody>
            <tr>
              <td>새 닉네임</td>
              <td><input type="text" name="nickname" style={textBoxStyle} onChange={inputChange}/></td>
            </tr>
            <tr style={{textAlign: 'right'}}>
              <td />
              <td>
                <button style={buttonStyle} onClick={changeNick}>변경하기</button>
              </td>
            </tr>
          </tbody>
        </table>
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
  padding: '20px',
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

const buttonStyle = {
  backgroundColor: '#C0E7FE',
  color: '#1F4E79',
  borderRadius: '5px', // 모서리가 둥근 사각형
  fontSize: '1.5vw', // 글자 크기는 2vw
  padding: '0.25vw 1vw', // 버튼 크기는 글자 크기에 맞춰 조정
  border: 'none', // 테두리 없음
  cursor: 'pointer', // 커서를 포인터로 변경하여 클릭 가능하다는 표시
  fontWeight: 'bold'
};

const textBoxStyle = {
  borderRadius : '5px',
  width: '200px',
  height:'25px'
}


export default NicknameChange;