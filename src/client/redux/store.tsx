import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

/*-*-*-*-* reducers *-*-*-*-*/
import * as RootReducer from "./reducers/RootReducer";

/*-*-*-*-* AppProps *-*-*-*-*/
export interface AppStateProps {
	root: RootReducer.StateProps;
}

/*-*-*-*-* store *-*-*-*-*/
const storeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	combineReducers<AppStateProps>({
		root: RootReducer.default,
	}),
	storeEnhancers(applyMiddleware(thunk))
);

/*-*-*-*-* default *-*-*-*-*/
export default store;
