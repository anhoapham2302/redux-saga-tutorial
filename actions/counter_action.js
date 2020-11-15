import { DECREMENT, INCREMENT, RESET } from "./types"

export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
}

export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
}

export const resetAction = () => {
    return {
        type: RESET
    }
}