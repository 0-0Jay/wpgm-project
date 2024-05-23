import { useCookies } from 'react-cookie';

function Message({chat_id, nickname, chat}) {
  const [cookie] = useCookies([]);
  const date = new Date(Number(chat_id));
  const time = date.toDateString().substring(4, 10) + ' ' + date.toTimeString().substring(0, 5);

  console.log(date);
  return (
    <div>
      {nickname === cookie.login.nickname? (
        <div key={chat_id} style = {{textAlign:'right'}}>
          <div style={nickStyle}>{nickname}</div>
          <div>
            <span style={dateStyle}>{time}</span>
            <div style={myCmtStyle}>{chat}</div>
          </div>
        </div> ) : (
        <div key={chat_id}>
          <div style={nickStyle}>{nickname}</div>
          <div>
            <div style={commentStyle}>{chat}</div>
            <span style={dateStyle}>{time}</span>
          </div>
        </div> 
      )}
    </div>
  )
}
// CSS
const nickStyle = {
  color: '#1F4E79',
  fontSize: '1.2vw',
  marginTop:' 10px'
}

const commentStyle = {
  display: 'inline-block',
  backgroundColor: '#C0E7FE',
  padding: '0.25vw 1vw',
  borderRadius: '20px',
  width: 'auto',
  wordWrap: 'break-word',
  maxWidth: '40vw'
}

const myCmtStyle = {
  display: 'inline-block',
  backgroundColor: '#FFF099',
  padding: '0.25vw 1vw',
  borderRadius: '20px',
  width: 'auto',
  wordWrap: 'break-word',
  maxWidth: '40vw'
}

const dateStyle = {
  fontSize: '1vw',
  margin: ' 0px 5px 0px 5px'
}

export default Message;