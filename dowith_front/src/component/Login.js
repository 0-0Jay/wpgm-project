import React, {useState} from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

function Login({isOpen, onClose}) {
  const [formData, setFormData] = useState({user_id: '', passwd: '', });
  const [cookie, setCookie, removeCookie] = useCookies([]);

  // FUNCTION
  const inputChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  }

  const logIn = async() => {
    console.log(formData);
    await axios.post(
      'http://localhost:8099/user/login',
      formData
    )
    .then(response => {
      console.log(response)
      alert("로그인 성공.");
      setCookie("login", response.data, {path: "/", expires: new Date(Date.now() + 3600 * 1000 * 24)});
      window.location.reload();
    })
    .catch(error => {
      alert("로그인 실패. 아이디/비밀번호를 확인해주세요.");
    });
  };

  if (!isOpen) return null;
  // <---------------------------------------->

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <span style={closeButtonStyle} onClick={onClose}>×</span>
        <p style={{textAlign: 'center'}}>로그인</p>
        <table style={{textAlign: 'center'}}>
          <tbody>
            <tr>
              <td>아이디</td>
              <td><input type="text" name="user_id" style={textBoxStyle} onChange={inputChange}/></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input type="text" name="passwd" style={textBoxStyle} onChange={inputChange}/></td>
            </tr>
            <tr style={{textAlign: 'right'}}>
              <td />
              <td>
                <button style={buttonStyle} onClick={logIn}>로그인</button>
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


export default Login;