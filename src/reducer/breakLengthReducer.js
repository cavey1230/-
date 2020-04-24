const  breakLengthReducer=(state=5,action)=>{
    switch (action.type) {
        case "BADD":
            return state+1
        case "BSUB":
            return state-1
        default:
            return state
    }
}

const breakAddAction=()=>{
    return {
        type:"BADD"
    }
}
const breakSubAction=()=>{
    return {
        type:"BSUB"
    }
}
export {breakLengthReducer,breakAddAction,breakSubAction}
