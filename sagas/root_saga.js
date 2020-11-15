import { all } from "redux-saga/effects";
import { watchDecrement, watchIncrement } from "./counter_saga";

export default function* rootSaga() {
    yield all([
        watchIncrement(),
        watchDecrement()
    ])
}