import React from 'react';

function Join({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <span style={closeButtonStyle} onClick={onClose}>×</span>
        <p>회원가입</p>
      </div>
    </div>
  );
}

const modalStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  position: 'relative',
  backgroundColor: '#fff',
  padding: '20px',
};

const closeButtonStyle = {
  fontSize: '1.5vw',
  position: 'absolute',
  top: '5px',
  right: '5px',
  cursor: 'pointer',
};

export default Join;
