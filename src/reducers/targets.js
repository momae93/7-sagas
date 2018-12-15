const defaultTargetState = {
  list: [],
  lastId: 0
}

function target(state = defaultTargetState, action){
  switch (action.type) {
    case 'INCREMENT_TARGET':
      return {
        ...state,
        value: state.value + 1
      }

      case 'DECREMENT_TARGET':
      return {
        ...state,
        value: state.value - 1
      }
  
    default:
      return state;
  }
}

const targets = (state = defaultTargetState, action) => {
    switch (action.type) {
        case 'ADD_TARGET':
          return {
            list: [...state.list, {id: state.lastId, x: getRandomArbitrary(0, 100), y: getRandomArbitrary(0, 100), value: getRandomArbitrary(2, 5)}],
            lastId: state.lastId + 1
          }
        case 'INCREMENT_TARGET':
          return state.list.map(t => action.id === t.id ? target(t, action) : t);
        case 'DECREMENT_TARGET':
          return state.list.map(t => {
            const target = action.id === t.id ? target(t, action) : t;
          });
        case 'DELETE_TARGET':
          return {
            ...state,
            list: state.list.filter(t => t.id !== action.id),
          }
        default:
          return state;
      }
};

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default targets;