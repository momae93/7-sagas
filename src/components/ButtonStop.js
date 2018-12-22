import React from 'react';

const ButtonStart = ({ onClick = () => {} }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '200px',
      height: '100px',
      margin: 'auto',
      fontSize: '20px',
      fontStyle: 'italic',
      textAlign: 'center',
      lineHeight: '100px',
      cursor: 'pointer',
      backgroundColor: '#4BE072',
      color: '#21222C'
    }}
    onClick={onClick}
  >
    STOP !
  </div>
);

export default ButtonStart;
