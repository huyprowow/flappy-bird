//game reduce nhan vao state va hanh dong
const game=(state={},action) => {
switch(action.type){
    case 'START':
        return {...state,status:'playing'};

    default:
        return state;
}
}
export default game;