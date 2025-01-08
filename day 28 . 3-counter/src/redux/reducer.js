let count = {
    Count1: 0,
    Count2: 2,
    Count3: 1
}


let Reducer = (state = count, action) => {

    switch (action.type) {
        case "INC":
            return { ...state, Count1: state.Count1 + 5 }
        case "DEC":
            return { ...state, Count1: state.Count1 - 5 }
        case "MULMAX":
            return { ...state, Count2: state.Count2 * state.Count2 }
        case "NUM":
            return { ...state, Count3: state.Count3 * action.payload }
        default:
            return state
    }
}

export default Reducer