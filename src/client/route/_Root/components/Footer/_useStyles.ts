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

			/*-*-*-*-* menu *-*-*-*-*/
			menu: {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				margin: theme.spacing(2, 0, 1.5),
			},
			"menu-btn": {
				padding: theme.spacing(0, 1),
				borderRadius: theme.shape.borderRadius,
				fontSize: origStylesClass.fontSizePicker("basic"),
				fontFamily: origStylesClass.fontFamiPicker("basic"),
			},
			"menu-divider": {
				margin: theme.spacing(0, 2),
			},

			/*-*-*-*-* copyright *-*-*-*-*/
			copyright: {
				textAlign: "center",
				lineHeight: 1,
				margin: theme.spacing(1, 0),
				letterSpacing: 1.1,
				color: origStylesClass.colorPicker("gray-800"),
				fontSize: origStylesClass.fontSizePicker("sm"),
				fontFamily: origStylesClass.fontFamiPicker("basic"),
			},
			"copyright-faIcon": {
				margin: theme.spacing(0, 1),
				fontFamily: origStylesClass.fontFamiPicker("basic"),
			},

			/*-*-*-*-* private *-*-*-*-*/
			private: {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				fontSize: origStylesClass.fontSizePicker("xs"),
				letterSpacing: 1.2,
				margin: theme.spacing(1.5, 0, 2),
			},
			"private-faIcon": {
				marginRight: theme.spacing(1),
			},
			"private-link": {
				fontFamily: origStylesClass.fontFamiPicker("basic"),
				color: origStylesClass.colorPicker("blue-900"),
			},
			"private-divider": {
				margin: theme.spacing(0, 1),
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
