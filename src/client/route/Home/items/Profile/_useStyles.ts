import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStylesClass = new OrigStylesModule.default();

/*-*-*-*-*  *-*-*-*-*/
export const Root = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {
				height: "100%",
			},
		});
	})();

/*-*-*-*-* small *-*-*-*-*/
export const ItemSm = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Item: {},
		});
	})();

/*-*-*-*-* large *-*-*-*-*/
export const ItemLg = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Item: {
				height: "100%",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
			},

			container: {
				position: "relative",
				lineHeight: 0,
				"&:after": {
					position: "absolute",
					top: 0,
					left: 0,
					content: `' '`,
					height: "100%",
					width: "100%",
					boxShadow: origStylesClass.boxShadow(
						origStylesClass.colorPicker("brandWhite")
					),
				},
			},
			"container-img": {
				display: "inline-block",
				width: "100%",
				objectFit: "cover",
				position: "relative",
				maxHeight: "45vh",
			},
			"container-label": {
				position: "absolute",
				display: "inline-block",
				width: "100%",
				left: 0,
				bottom: 0,
				zIndex: 1,
				padding: theme.spacing(0, 4, 3, 4),
				letterSpacing: 1.3,
				fontSize: origStylesClass.fontSizePicker("lg"),
				color: origStylesClass.colorPicker("brandWhite"),
				textShadow: origStylesClass["textShadow-color"](
					origStylesClass.colorPicker("brandBlack")
				),
			},

			"container-profile": {
				display: "inline-block",
				width: "100%",
				position: "absolute",
				top: 0,
				left: 0,
				zIndex: 0,
			},
		});
	})();

/*-*-*-*-* ProfileForm *-*-*-*-*/
export const ProfileForm = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			ProfileForm: {
				padding: theme.spacing(5, 6, 0, 6),
			},

			"ProfileForm-text": {
				color: origStylesClass.colorPicker("brandBlack"),
				textShadow: origStylesClass["textShadow-color"](
					origStylesClass.colorPicker("brandWhite")
				),
				letterSpacing: 1.3,
				lineHeight: 3,
				fontFamily: origStylesClass.fontFamiPicker("basic"),
			},

			name: {
				fontSize: origStylesClass.fontSizePicker("xl"),
			},
			work: {
				fontSize: origStylesClass.fontSizePicker("md"),
				paddingLeft: theme.spacing(1),
			},
			details: {
				fontSize: origStylesClass.fontSizePicker("md"),
				paddingLeft: theme.spacing(1),
			},
			program: {
				fontSize: origStylesClass.fontSizePicker("md"),
				paddingLeft: theme.spacing(1),
			},
			faIcon: {
				color: origStylesClass.colorPicker("brandWhite", 0.7),
				marginRight: theme.spacing(2),
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
