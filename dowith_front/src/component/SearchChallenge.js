import React, { useState } from 'react';
import axios from 'axios';
import ChallengeCard from './ChallengeCard';

function SearchChallenge() {
    const [cardList, setCardList] = useState([]);
    const [formData, setFormData] = useState({
      query: '',
      tags: '자기계발'
    });

    // FUNCTION
    const inputChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name] : e.target.value,
      })
    }

    const chList = async() => {
        console.log(cardList);
        await axios.get(
          'http://localhost:8099/main/search?q=' + formData.query + '&tags=' + formData.tags
        )
        .then(response => {
          console.log(response);
          setCardList(response.data);
        })
        .catch(error => {
          console.log("요청 실패");
        });
    };
    
    return (
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div>
            ● 태그　　  
            <input type="radio" id="0" name="tags" value="자기계발" onChange={inputChange} defaultChecked />자기계발　
            <input type="radio" id="1" name="tags" value="건강/운동" onChange={inputChange}/>건강/운동　
            <input type="radio" id="2" name="tags" value="예술" onChange={inputChange}/>예술　
            <input type="radio" id="2" name="tags" value="제작/개발" onChange={inputChange}/>제작/개발　
            <input type="radio" id="2" name="tags" value="자격증" onChange={inputChange}/>자격증 
          </div>
          <div>
            <p />
            ● 검색어　　<input type="text" name="query" onChange={inputChange}/>
            <button style={buttonStyle} onClick={chList}>검색</button>
          </div>
        </div>
        <div style={{display:'flex', flexWrap:'wrap'}}>
          {cardList.length > 0 ? (
            cardList.map(ch => (
              <ChallengeCard key={ch.c_id} CardInfo={ch}/>
          ))
          ) : (
            <div style={{
              color: '#1F4E79',
              fontSize: '1.2vw',
              fontWeight: 'bold',
              margin: '10% 40% 10% 40%'
            }}>
              검색 결과가 없습니다.
            </div>
          )}
        </div>
      </div>
    );
}

// CSS
const containerStyle = {
  backgroundColor: '#fff',
  padding: '30px',
}

const contentStyle = {
  backgroundColor: '#fff',
  padding: '15px',
  margin:'0px 15px 15px 15px',
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
  width:'5vw',
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
  
export default SearchChallenge;