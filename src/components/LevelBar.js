import React from 'react';
import { connect } from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import ButtonStart from '../components/ButtonStart';
import ButtonStop from '../components/ButtonStop';

const mapStateToProps = state => ({
  levelList: state.game.levelList
});

const LevelBar = ({ levelList, dispatch }) => (
  <div
    style={{
      position: 'fixed',
      backgroundColor: '#21222C',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
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