const initialState = {
  x: 300,
  pipes: [],
};

const pipe = (state = initialState, action) => {
  switch (action.type) {
    case "RUN":
      return state.pipes.length ? { ...state, x: state.x - 10 } : state; //co pipe trong mang(create roi) thi ms cho pipe chay
    case "CREATE":
      const topHeight = Math.floor(Math.random() *200 ) + 40;
      return { ...state, pipes: [...state.pipes, { topHeight }] };
    case "DELETE":
      // state.pipes.shift();
      return { ...state, pipes: [...state.pipes] };
      case 'OVER':
        return initialState;
    default:
      return state;
  }
};
export default pipe;
