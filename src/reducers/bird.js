const initialState = {
  y: 256,
  numDeg: 0,
};

const bird = (state = initialState, action) => {
  switch (action.type) {
    case "FLY":
      return { ...state, y: state.y - 50, numDeg: -45 };
    case "FALL":
      return { ...state, y: state.y + 20, numDeg: 0 };
    default:
      return state;
  }
};

export default bird;
