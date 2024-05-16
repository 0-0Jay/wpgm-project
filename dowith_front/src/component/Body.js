import React, { useState } from 'react';
import ChallengeList from './ChallengeList';
import CreateChallenge from './CreateChallenge';
import SearchChallenge from './SearchChallenge';
import MyPage from './MyPage';

function Body({menu}) {
  return (
    <div>
        {menu === 1 ? (
          <CreateChallenge />
        ) : menu === 2 ? (
          <MyPage />
        ) : menu === 3 ? (
          <SearchChallenge />
        ) : (
          <ChallengeList />
        )}
    </div>
  );
}

export default Body;