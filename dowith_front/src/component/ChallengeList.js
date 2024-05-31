import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import ChallengeCard from './ChallengeCard';

function ChallengeList() {
    const [cardList, setCardList] = useState([]);
    const [cookie] = useCookies([]);

    useEffect(() => {
        const chList = async() => {
            await axios.get(
              'http://localhost:8099/main/chList/' + cookie.login.user_id
            )
            .then(response => {
              console.log(response);
              setCardList(response.data);
            })
            .catch(error => {
              console.log("요청 실패");
            });
        };
        chList();
    }, []);

    return (
        <div style={{display:'flex', flexWrap: 'wrap', height: '61.5vw', overflowY: 'auto'}}>
          {cardList.length > 0 ? (
            cardList.map(ch => (
              <ChallengeCard key={ch.c_id} CardInfo={ch} menu={1}/>
            ))) : (
              <div style={{
                color: '#1F4E79',
                fontSize: '1vw',
                fontWeight: 'bold',
                margin: '10% 40% 10% 40%'
              }}>
                진행중인 챌린지가 없습니다.
              </div>
            )}
        </div>
    );
}
  
export default ChallengeList;