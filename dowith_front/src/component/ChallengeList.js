import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChallengeCard from './ChallengeCard';

function ChallengeList() {
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        const chList = async() => {
            await axios.get(
              'http://localhost:8099/main/chList'
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
            {cardList.map(ch => (
                <ChallengeCard key={ch.c_id} CardInfo={ch} menu={1}/>
            ))}
        </div>
    );
}
  
export default ChallengeList;