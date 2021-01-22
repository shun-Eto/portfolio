import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
	basicStyles,
	basicColors,
} from "@src/client/assets/styles/basicStyles";
import { colorPicker } from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* Root *-*-*-*-*/
export const Root = (params: {}) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const {} = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Root: {
				display: "flex",
				flexDirection: "row",
			},

			/*-*-*-*-* RequestForm *-*-*-*-*/
			"Root-RequestForm": {
				flexBasis: 800,
				padding: theme.spacing(2, 2),
			},

			/*-*-*-*-* PlanCondtions *-*-*-*-*/
			"Root-PlanCondtions": {
				padding: theme.spacing(2, 2),
				flexGrow: 1,
			},
		});
	})();

/*
export const Root = (params: {}) =>
    makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {},
		});
    })();
*/
