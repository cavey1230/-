const intervalReducer = (state = {minute: 24, second: 60}, action) => {
    switch (action.type) {
        case "SAVE_AND_CHANGE":
            return {
                minute: action.minute,
                second: action.second
            }
        default:
            return state
    }
}

const saveTimes = (mm, ss, pd) => {
    return {
        type: 'SAVE_AND_CHANGE',
        minute: mm,
        second: ss
    }
}

export {intervalReducer, saveTimes}
