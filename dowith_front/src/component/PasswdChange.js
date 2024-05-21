import React, {useState} from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

function PasswdChange({isOpen, onClose}) {
  const [formData, setFormData] = useState({user_id: '', passwd: '',  newpw: ''});
  const [cookie, setCookie, removeCookie] = useCookies([]);

  // FUNCTION
  const inputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  }

  const changePw = async() => {
    setFormData({
      ...formData,
      ['user_id'] : cookie.login.user_id,
    })

    console.log(formData);
    await axios.post(
      'http://localhost:8099/user/changePw',
      formData
    )
    .then(response => {
      console.log(response)
      alert("비밀번호가 변경되었습니다.");
      window.location.reload();
    })
    .catch(error => {
      alert("변경 실패");
      console.log(error);
    });
  };

  if (!isOpen) return null;
  // <---------------------------------------->

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <span style={closeButtonStyle} onClick={onClose}>×</span>
        <p style={{textAlign: 'center'}}>비밀번호 변경</p>
        <table style={{textAlign: 'center'}}>
          <tbody>
            <tr>
              <td>비밀번호</td>
              <td><input type="text" name="passwd" style={textBoxStyle} onChange={inputChange}/></td>
            </tr>
            <tr>
              <td>새 비밀번호</td>
              <td><input type="text" name="newpw" style={textBoxStyle} onChange={inputChange}/></td>
            </tr>
            <tr style={{textAlign: 'right'}}>
              <td />
              <td>
                <button style={buttonStyle} onClick={changePw}>변경하기</button>
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


export default PasswdChange;