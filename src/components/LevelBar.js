import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  levelList: state.game.levelList
});

const LevelBar = ({ levelList, dispatch }) => (
  <div
    style={{
      position: 'fixed',
      backgroundColor: '#21222C',
      marginTop:'20px',
      marginLeft:'20px',
      width: '100vw',
      height: '100vh',
    }}
  >
    <React.Fragment>
      <div style={{color:"#FFFFFF", fontSize:"20px"}}>Choose your difficulty level</div>
      {
        levelList.map(level =>
          <div style={{
            color: level.isSelected ? '#4BE072' : '#FFFFFF'
          }} onClick={() => dispatch({ type: 'GAME_SELECT_LEVEL', id: level.id })}>
            - {level.text}
          </div>
        )
      }
    </React.Fragment>

  </div>
);

export default connect(mapStateToProps)(LevelBar);