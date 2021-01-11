import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
	basicStyles,
	basicColors,
} from "@src/client/assets/styles/basicStyles";
import { colorPicker } from "@src/client/assets/styles/origStyles";

/*-*-*-*-* Root *-*-*-*-*/
export const Root = (params: {}) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const {} = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Root: {},
		});
	})();

/*-*-*-*-* HomeLg *-*-*-*-*/
export const HomeLg = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Home: {
				padding: theme.spacing(2),
			},

			/*-*-*-*-* Ledger *-*-*-*-*/
			"Home-Ledger": {},

			//	wrapper
			"Home-wrapper": {},

			/*-*-*-*-* Table *-*-*-*-*/
			"Home-Table": {},

			/*-*-*-*-* Chart *-*-*-*-*/
			"Home-Chart": {},
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
