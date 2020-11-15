import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counter_reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/root_saga";
import { movieReducer } from "./reducers/movie_reducer";


const allReducers = combineReducers({
    counterReducer: counterReducer,
    movieReducer: movieReducer
})

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
    const Store = createStore(
      allReducers,
      applyMiddleware(sagaMiddleware)
    );
   sagaMiddleware.run(rootSaga);
    return Store;
}

export const AppStore = createAppStore();
