function Body({menu}) {
  return (
    <body>
        {menu === 1 ? (
          <p>챌린지 등록 누른 상태</p>
        ) : menu === 2 ?(
          <p>마이페이지 누른 상태</p>
        ) : (
          <p>진행 중 챌린지 누른 상태</p>
        )}
    </body>
  );
}

export default Body;