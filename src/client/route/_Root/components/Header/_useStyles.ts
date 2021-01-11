import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStylesClass = new OrigStylesModule.default();

/*-*-*-*-* Root *-*-*-*-*/
export const Root = (params: {}) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const {} = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Root: {
				backgroundColor: origStylesClass.colorPicker("brandWhite", 0.1),
				boxShadow: "unset",
				color: origStylesClass.colorPicker("brandBlack"),
			},

			container: {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
			},

			logo: {
				flexGrow: 1,
				lineHeight: 0,
			},
			"logo-img": {
				display: "inline-block",
				maxHeight: 40,
			},

			menu: {},
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
