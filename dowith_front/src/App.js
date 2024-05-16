import React, {useState} from 'react';
import Header from './component/Header';
import Menu from './component/Menu';
import Body from './component/Body';

function App() {
  const [menu, setMenu] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div style={appStyle}>
      <Header setIsLogin={setIsLogin}/>
      <div style={contentStyle}>
        <div style={menuContainerStyle}>
          <Menu setMenu={setMenu} isLogin={isLogin} />
        </div>
        <div style={bodyContainerStyle}>
          <Body menu={menu} isLogin={isLogin}/>
        </div>
      </div>
    </div>
  );
}

const appStyle = {
  display: 'flex',
  flexDirection: 'column', // 세로 배치
  height: '100vh', // 화면 전체 높이
};

const contentStyle = {
  display: 'flex',
  flex: '1', 
};

const menuContainerStyle = {
  width: '20%',
};

const bodyContainerStyle = {
  width: '80%',
};

export default App;

