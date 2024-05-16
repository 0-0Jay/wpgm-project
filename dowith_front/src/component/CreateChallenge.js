import React, { useState } from 'react';
import axios from 'axios';

function CreateChallenge() {
    const [formData, setFormData] = useState({
        user_id: localStorage.getItem("user_id"),
        title: '',
        endtime: '',
        comments: '',
        tags: '',
        limits: ''
    });
    // FUNCTION
    const inputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }

    const makeCh = async() => {
        await axios.post(
            'http://localhost:8099/main/makeCh',
            formData
        )
        .then(response => {
            console.log(response);



        })
        .catch(error => {

        });
    };

    return (
        <div>
            <div style={containerStyle}>
                <div style={titleStyle}>
                    제 목 : <input type='text' style={titleBoxStyle} onChange={inputChange}></input>
                </div>
                <div style={contentStyle}>
                    <div>
                        ● 목표 기한 : <input type='date' name='limit' style={textBoxStyle} onChange={inputChange}/> 까지
                        <p />
                    </div>
                    <div>
                        ● 최대 인원 : <input type='text' name='limit' style={textBoxStyle} onChange={inputChange}/> 명
                        <p />
                    </div>
                    <div>
                        ● 챌린지 소개 / 설명<br />
                        <textarea name='content' style={textareaStyle}></textarea>
                        <p />
                    </div>
                    <div>
                        ● 태그　　
                        <input type="radio" id="0" name="tags" value="자기계발" onChange={inputChange} defaultChecked />자기계발　
                        <input type="radio" id="1" name="tags" value="건강/운동" onChange={inputChange}/>건강/운동　
                        <input type="radio" id="2" name="tags" value="예술" onChange={inputChange}/>예술　
                        <input type="radio" id="2" name="tags" value="제작/개발" onChange={inputChange}/>제작/개발　
                        <input type="radio" id="2" name="tags" value="자격증" onChange={inputChange}/>자격증　
                        <p />
                    </div>
                    <button style={buttonStyle}>등록하기</button>
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
    backgroundColor: '#EFF6FF',
    fontSize: '2.5vw',
    color: '#1F4E79',
    padding: '20px',
    fontWeight: 'bold',
    borderRadius:'30px 30px 0px 0px',
    border: '3px solid #1F4E79'
}

const contentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    color: '#1F4E79',
    fontSize: '1.5vw',
    fontWeight: 'bold',
    borderRadius:'0px 0px 30px 30px',
    border: '3px solid #1F4E79',
    margin: '-2px 0px 0px 0px'
}

const buttonStyle = {
    backgroundColor: '#C0E7FE',
    color: '#1F4E79',
    borderRadius: '20px', // 모서리가 둥근 사각형
    fontSize: '1.5vw', // 글자 크기는 2vw
    padding: '0.25vw 1vw', // 버튼 크기는 글자 크기에 맞춰 조정
    width:'10vw',
    height: '3.5vw',
    margin: '0px 0px 0px 85%',
    border: '2px solid #1F4E79', // 테두리 설정
    cursor: 'pointer', // 커서를 포인터로 변경하여 클릭 가능하다는 표시
    fontWeight: 'bold',
};

const textareaStyle = {
    borderRadius: '5px',
    resize: 'none',
    margin: '10px',
    width: '95%',
    height: '20vw',
    border: '2px solid #1F4E79',
    fontSize: '1.4vw',

}

const titleBoxStyle = {
    borderRadius : '5px',
    width: '25vw',
    height:'3vw',
    border: '2px solid #1F4E79',
    fontSize: '2vw'
}

const textBoxStyle = {
    borderRadius : '5px',
    width: '10vw',
    height:'2vw',
    border: '2px solid #1F4E79',
    fontSize: '1.4vw'
}

export default CreateChallenge;