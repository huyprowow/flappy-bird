const initialState={
    y:256
}

const bird=(state=initialState,action)=>{
    switch(action.type){
        case 'FLY':
            return {...state, y:state.y-50}
        default:
            return state;
    }
}

export default bird;