//  actions
import * as HomeAction from "@src/client/redux/actions/homeAction";

/*-*-*-*-* basic interface *-*-*-*-*/
export interface Status {}
const initStatus: Status = {};
export interface Data {}
const initData: Data = {};
export interface Environment {
	navigator: string;
}
const initEnvironment: Environment = {
	navigator: "",
};

export interface StateProps {
	status: Status;
	data: Data;
	env: Environment;
}
const initStateProps: StateProps = {
	status: initStatus,
	data: initData,
	env: initEnvironment,
};

/*-*-*-*-* reducer **-*-*-*-*/
const reducer = (
	state: StateProps = initStateProps,
	action: HomeAction.ActionProps
) => {
	switch (action.type) {
		/*-*-*-*-* actions **-*-*-*-*/
		case HomeAction.types.update_navigator:
			return {
				...state,
				env: {
					...state.env,
					navigator: action.payload.navigator,
				},
			};

		/*-*-*-*-* default **-*-*-*-*/
		default:
			return state;
	}
};

/*-*-*-*-* default **-*-*-*-*/
export default reducer;
