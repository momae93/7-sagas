import React from 'react';
import { connect } from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import ButtonStart from '../components/ButtonStart';
import ButtonStop from '../components/ButtonStop';
import LevelBar from '../components/LevelBar';

const mapStateToProps = state => ({
  lives: state.game.lives,
  score: state.game.score,
  isStarted: state.game.isStarted,
  list: state.targets.list
});

const GameLayout = ({ isStarted, lives, score, list, dispatch }) => (
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
    {isStarted ? (
      lives === 0 ? (
        <React.Fragment>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '300px',
            height: '100px',
            margin: 'auto',
            fontSize: '32px',
            fontStyle: 'italic',
            textAlign: 'center',
            lineHeight: '100px',
            color: '#FFFFFF'
          }}>GAME OVER</div>
        </React.Fragment>
      ) :
        (
          <React.Fragment>
            <Info lives={lives} score={score} />
            <ButtonStop onClick={() => dispatch({ type: 'GAME_RESTART_REQUESTED' })}></ButtonStop>
            {
              list.map(target => (
                <Target x={target.x} y={target.y} value={target.value} backgroundColor={target.backgroundColor} onClick={() => dispatch({ type: 'TARGET_DELETE_REQUESTED', id: target.id })} />
              ))
            }
          </React.Fragment>
        )
    ) :
      (
        <React.Fragment>
          <LevelBar />
          <ButtonStart onClick={() => dispatch({ type: 'GAME_START_REQUESTED' })} />
        </React.Fragment>
      )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);