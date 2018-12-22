import React from 'react';

const ButtonStop = ({ onClick = () => {} }) => (
  <div
    style={{
      position: 'fixed',
      width: '200px',
      marginTop: '20px',
      marginLeft: '20px',
      fontSize: '20px',
      fontStyle: 'italic',
      cursor: 'pointer',
      color: '#FFFFFF'
    }}
    onClick={onClick}
  >
    STOP GAME
  </div>
);

export default ButtonStop;
