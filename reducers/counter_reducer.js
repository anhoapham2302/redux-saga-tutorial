import { DECREMENT, INCREMENT, RESET } from "../actions/types";

export const counterReducer = (times = 0, action) => {
    switch(action.type){
        case INCREMENT:
            return times + action.step;
        case DECREMENT:
            return times - action.step;
        case RESET:
            return times = 0;
        default:
            return times;
    }
}