import React, { useState } from 'react';
import styled from 'styled-components';

function CreateChallenge() {
    return (
        <div>
            <div style={containerStyle}>
                <div style={titleStyle}>
                    제 목 : <input type='text'></input>
                </div>
                <div style={contentStyle}>
                    <p>
                        목표 기한 : <input type='text'></input>
                    </p>
                    <p>
                        최대 인원 : <input type='text'></input>
                    </p>
                    <p>
                        챌린지 소개 / 설명
                    </p>
                    <p>
                        태그<br />
                        <InfoRadioBoxInput type="radio" id="0" name="자기계발" />
                        <InfoRadioBoxInput type="radio" id="1" name="운동/건강" />
                        <InfoRadioBoxInput type="radio" id="2" name="예술" />
                    </p>
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
    margin: '0px 0px 0px 60vw',
    border: '2px solid #1F4E79', // 테두리 설정
    cursor: 'pointer', // 커서를 포인터로 변경하여 클릭 가능하다는 표시
    fontWeight: 'bold',
};

// 라디오 버튼 공사해야됨 이거 왜 안되는지 모르겠음
const InfoRadioBoxInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;

  &: checked + label {
    background-color: #1F4E79;
    color: #ffffff;
  }
`;

export default CreateChallenge;