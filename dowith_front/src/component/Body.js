import React, { useState } from 'react';
import ChallengeList from './ChallengeList';
import CreateChallenge from './CreateChallenge';
import MyPage from './MyPage';

function Body({menu}) {
  return (
    <div>
        {menu === 1 ? (
          <CreateChallenge />
        ) : menu === 2 ?(
          <MyPage />
        ) : (
          <ChallengeList />
        )}
    </div>
  );
}

export default Body;