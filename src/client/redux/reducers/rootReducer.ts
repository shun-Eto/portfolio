//  actions
import * as RootAction from "@src/client/redux/actions/rootAction";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* status **-*-*-*-*/
export interface Status {}
const initStatus: Status = {};
export interface Data {}
export const initData: Data = {};
export interface Environment {
	id: string;
	token: string;
	lang: keyof EnvTypes.Languages;
	device: {
		sizeType: "sp" | "pc";
		height: number;
		width: number;
	};
}
const initEnvironment: Environment = {
	id: localStorage.getItem("id") || "",
	token: localStorage.getItem("token") || "",
	lang: "jp",
	device: {
		sizeType: navigator.userAgent.match(/iphone|ipad|ipod|android/i)
			? "sp"
			: "pc",
		height: window.innerHeight,
		width: 0,
	},
};

/*-*-*-*-* state *-*-*-*-*/
export interface StateProps {
	status: Status;
	data: Data;
	env: Environment;
}
const initProps: StateProps = {
	status: initStatus,
	data: initData,
	env: initEnvironment,
};

/*-*-*-*-* reducer **-*-*-*-*/
const reducer = (
	state: StateProps = initProps,
	action: RootAction.ActionProps
) => {
	switch (action.type) {
		/*-*-*-*-* actions **-*-*-*-*/

		/*-*-*-*-* default **-*-*-*-*/
		default:
			return state;
	}
};

/*-*-*-*-* default **-*-*-*-*/
export default reducer;
