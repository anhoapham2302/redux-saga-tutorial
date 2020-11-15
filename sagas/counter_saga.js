import {takeEvery} from 'redux-saga/effects'
import { DECREMENT, INCREMENT } from '../actions/types';

function* increment(){
    console.log("This is increment saga");
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment);
}

function* decrement(){
    console.log("This is decrement saga");
}

export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrement);
}