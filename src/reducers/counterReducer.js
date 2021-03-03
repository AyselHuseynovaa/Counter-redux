const initialState={
    count:0
}
 function counterReducer (state=initialState, action){
    switch(action.type){
        case "ADD":
        return {count:state.count+action.payload}
        case "REMOVE":
        return{count:state.count-action.payload}
        default:
        return state
    }
}

export default counterReducer;
