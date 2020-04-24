const  sessionLengthReducer=(state=25,action)=>{
    switch (action.type) {
        case "SADD":
            return state+1
        case "SSUB":
            return state-1
        default:
            return state
    }
}

const sessionAddAction=()=>{
    return {
        type:"SADD"
    }
}
const sessionSubAction=()=>{
    return {
        type:"SSUB"
    }
}
export {sessionAddAction,sessionLengthReducer,sessionSubAction}
