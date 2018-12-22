const defaultTargetState = {
  list: [],
  lastId: 0
}

const targetBackground = ["#CD6155", "#EC7063", "#DC7633", "#F5B041", "#F4D03F", "#58D68D", "#52BE80"];

function target(state = defaultTargetState, action) {
  switch (action.type) {

    case 'DECREMENT_TARGET':
      return {
        ...state,
        value: state.value - 1,
        backgroundColor: targetBackground[state.value - 1]
      }

    default:
      return state;
  }
}

const targets = (state = defaultTargetState, action) => {
  switch (action.type) {
    case 'TARGETS_RESTART':
      return defaultTargetState;
    case 'ADD_TARGET':
      const x = getRandomArbitrary(20, 100);
      const y = getRandomArbitrary(20, 90);
      const value = getRandomArbitrary(4, 6);
      return {
        list: [...state.list, { id: action.id, x, y, value, backgroundColor: targetBackground[value] }],
        lastId: state.lastId + 1
      }
    case 'DECREMENT_TARGET':
      return {
        ...state,
        list: state.list.map(t => action.id === t.id ? target(t, action) : t)
      }
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