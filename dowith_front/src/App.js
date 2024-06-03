import React, {useState} from 'react';
import Header from './component/Header';
import Menu from './component/Menu';
import Body from './component/Body';
import { useCookies } from 'react-cookie';
import Main from './component/Main';

function App() {
  const [menu, setMenu] = useState(0);
  const [cookie] = useCookies([]);

  return (
    <div style={appStyle}>
      {cookie.login && cookie.login.user_id ? (
        <><Header />
        <div style={contentStyle}>
          <div style={menuContainerStyle}>
            <Menu setMenu={setMenu} />
          </div>
          <div style={bodyContainerStyle}>
            <Body menu={menu} />
          </div>
        </div></>) : (
          <Main />
        )}
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

