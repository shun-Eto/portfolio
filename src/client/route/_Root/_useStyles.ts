import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
	basicColors,
	basicStyles,
} from "@src/client/assets/styles/basicStyles";
import { colorPicker } from "@src/client/assets/styles/origStyles";

//	modules

//	classes

/*-*-*-*-* Root *-*-*-*-*/
export const Root = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {
				height: "100%",
				backgroundColor: colorPicker("brandWhite"),
			},
		});
	})();

/*-*-*-*-* small : Root *-*-*-*-*/
export const RootSm = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {
				display: "flex",
				flexDirection: "column",
				height: "100%",
			},

			/*-*-*-*-* header *-*-*-*-*/
			"Root-header": {},

			/*-*-*-*-* nav *-*-*-*-*/
			"Root-nav": {},

			/*-*-*-*-* body *-*-*-*-*/
			"Root-body": {
				flexGrow: 1,
			},

			/*-*-*-*-* actions *-*-*-*-*/
			"Root-actions": {},
		});
	})();

/*-*-*-*-* large : Root *-*-*-*-*/
export const RootLg = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {
				height: "100%",
				display: "flex",
				flexDirection: "row",
			},

			/*-*-*-*-* header *-*-*-*-*/
			"Root-header": {
				width: 0,
			},

			/*-*-*-*-* actions *-*-*-*-*/
			"Root-actions": {},

			/*-*-*-*-* nav *-*-*-*-*/
			"Root-nav": {},

			/*-*-*-*-* body *-*-*-*-*/
			"Root-container": {
				flexGrow: 1,
				display: "flex",
				flexDirection: "column",
				minWidth: 0,
				...basicStyles.scrollInVisible({ scrollY: true }),
			},
			"Root-body": {
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
