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
				paddingBottom: theme.spacing(1),
				position: "absolute",
				display: "inline-block",
				width: "100%",
				bottom: 0,
				left: 0,
			},

			text: {
				textAlign: "center",
				lineHeight: 1,
				margin: theme.spacing(2, 0),
				letterSpacing: 1.3,
			},
			"text-faIcon": {
				margin: theme.spacing(0, 1),
				fontFamily: origStylesClass.fontFamiPicker("basic"),
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
