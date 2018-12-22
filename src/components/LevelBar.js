import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  levelList: state.game.levelList
});

const LevelBar = ({ levelList, dispatch }) => (
  <div
    style={{
      position: 'relative',
      backgroundColor: '#21222C',
      width: '100vw',
      height: '100vh',
      margin: 'auto'
    }}
  >
    <React.Fragment>
      {
        levelList.map(level =>
          <div style={{
            color: level.isSelected ? '#4BE072' : '#FFFFFF'
          }} onClick={() => dispatch({ type: 'GAME_SELECT_LEVEL', id: level.id })}>
            {level.text}
          </div>
        )
      }
    </React.Fragment>

  </div>
);

export default connect(mapStateToProps)(LevelBar);