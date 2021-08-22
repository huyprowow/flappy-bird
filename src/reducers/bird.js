const initialState = {
  y: 256,
  numDeg: 0,
};

const bird = (state = initialState, action) => {
  switch (action.type) {
    case "FLY":
      return { ...state, y: state.y - 60, numDeg: -45 };
    case "FALL":
      return { ...state, y: state.y + 30, numDeg: 20 };
    case 'OVER':
      return initialState;
    default:
      return state;
  }
};

export default bird;
