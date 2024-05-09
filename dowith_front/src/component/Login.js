import React, {useState} from 'react';
import axios from 'axios';

function Login({setUserInfo, isOpen, onClose }) {
  const [formData, setFormData] = useState({user_id: '', passwd: '', });

  // FUNCTION
  const idInputChange = (e) => {
    let copy = {...formData};
    copy.user_id = e.target.value
    setFormData(copy);
  };

  const pwInputChange = (e) => {
    let copy = {...formData};
    copy.passwd = e.target.value
    setFormData(copy);
  };

  const logIn = async() => {
    console.log(formData);
    await axios.post(
      'http://localhost:8099/user/login',
      formData
    )
    .then(response => {
      console.log(response)
      alert("로그인 성공.");
      setUserInfo({user_id:formData.user_id, nickname:response.data.nickname});
      console.log('성공');
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
          <tr>
            <td>아이디</td>
            <td><input type="text" name="id" style={textBoxStyle} onChange={idInputChange}/></td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input type="text" name="pw" style={textBoxStyle} onChange={pwInputChange}/></td>
          </tr>
          <tr style={{textAlign: 'right'}}>
            <td />
            <td>
              <button style={buttonStyle} onClick={logIn}>로그인</button>
            </td>
          </tr>
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
  borderRadius:'10%'
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