import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

/********** reducers **********/

/********** AppState **********/
export interface AppState {}

/********** store **********/
const storeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers<AppState>({}),
    storeEnhancers(applyMiddleware(thunk))
);

/********** default **********/
export default store;
