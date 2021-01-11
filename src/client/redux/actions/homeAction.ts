//	reducers
import * as HomeReducer from "@src/client/redux/reducers/homeReducer";
import { Update } from "@src/server/api/Mongo/_type";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* action types *-*-*-*-*/
export const types = {
	update_navigator: "[ Home ] update_navigator",
};

/*-*-*-*-* methods *-*-*-*-*/
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

/*-*-*-*-* ActionProps *-*-*-*-*/
export type ActionProps = Update_Navigator;
