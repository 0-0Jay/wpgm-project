import React, { useState } from 'react';

function ChallengeCard({CardInfo}) {
    const endtime = CardInfo.endtime
    return (
        <div style={containerStyle}>
            <div style={titleStyle}>
                {CardInfo.title}
                <button style={buttonStyle}>참가하기</button>
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
    padding: '15px',
}

const titleStyle = {
    backgroundColor: '#EFF6FF',
    fontSize: '2.5vw',
    color: '#1F4E79',
    padding: '10px 20px 25px 20px',
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

const buttonStyle = {
    backgroundColor: '#C0E7FE',
    color: '#1F4E79',
    borderRadius: '20px', // 모서리가 둥근 사각형
    fontSize: '1.5vw', // 글자 크기는 2vw
    padding: '0.25vw 1vw', // 버튼 크기는 글자 크기에 맞춰 조정
    width:'10vw',
    height: '3.5vw',
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
    margin: '0px 0px 0px 10px',
    border: '2px solid #1F4E79', // 테두리 설정
    cursor: 'pointer', // 커서를 포인터로 변경하여 클릭 가능하다는 표시
    fontWeight: 'bold',
    marginLeft:'auto'
};
  
export default ChallengeCard;