//	reducers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* action types *-*-*-*-*/
export const types = {
	update_navigator: "[ Root ] update_navigator",
	update_footer: "[ Root ] update_footer",
};

/*-*-*-*-* methods *-*-*-*-*/
//	update_navigator
export interface Update_Navigator {
	type: typeof types.update_navigator;
	payload: { navigator: string };
}
export function update_navigator(navigator: string): Update_Navigator {
	return {
		type: types.update_navigator,
		payload: { navigator },
	};
}
//	update_footer
export interface Update_Footer {
	type: typeof types.update_footer;
	payload: { footer: boolean };
}
export function update_footer(active: boolean): Update_Footer {
	return {
		type: types.update_footer,
		payload: { footer: active },
	};
}

/*-*-*-*-* ActionProps *-*-*-*-*/
export type ActionProps = Update_Navigator & Update_Footer;
