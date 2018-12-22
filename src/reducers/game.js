const defaultState = {
  lives: 3,
  score: 0,
  isStarted: false,
  levelList: [{
    id: 1,
    text: 'EASY',
    decrementTime: 2000,
    isSelected: false
  },{
    id: 2,
    text: 'MEDIUM',
    decrementTime: 1000,
    isSelected: true
  },{
    id: 3,
    text: 'HARD',
    decrementTime: 850,
    isSelected: false
  }],
  spawnNumber: 1
};

function computeSpawn(score){
  if (score >= 15)
    return 3;
  else if (score >= 5)
    return 2;
  else
    return 1;
}

const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_START':
      return {
        ...state,
        isStarted: true
      };
    case 'GAME_RESTART':
      return defaultState;
    case 'GAME_SELECT_LEVEL':
      const levelList = state.levelList.map(lvl => action.id === lvl.id ? {...lvl, isSelected: true } : {...lvl, isSelected: false})
      return {
        ...state,
        levelList     
      }
    case 'SCORE_INCREMENT':
      return {
        ...state,
        score: state.score + 1,
        spawnNumber: computeSpawn(state.score)
      }
    case 'LIVES_DECREMENT':
      return {
        ...state,
        lives: state.lives - 1
      }
    default:
      return state;
  }
};

export default game;
