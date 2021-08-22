//game reduce nhan vao state va hanh dong
const game=(state={},action) => {
switch(action.type){
    case 'START':
        return {...state,status:'playing'};
    case 'OVER':
        console.log('game-over')
        return {...state,status:'over'}
    default:
        return state;
}
}
export default game;