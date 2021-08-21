const initialState = {
  x: 300,
  pipes: [{ topHeight: 200 }],
};

const pipe = (state = initialState, action) => {
  switch (action.type) {
    case "RUN":
      return { ...state, x: state.x - 10 };
    case "CREATE":
      return { ...state, pipe: [...state.pipes, { topHeight: 200 }] };
    default:
      return state;
  }
};
export default pipe;
