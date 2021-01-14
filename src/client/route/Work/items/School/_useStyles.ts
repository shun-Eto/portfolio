import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStylesClass = new OrigStylesModule.default();

export const Item = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Item: {},
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
			Item: {},
			"Item-container": {
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				paddingTop: "5vh",
			},

			"Item-element": {
				width: "100%",
				textAlign: "center",
				marginBottom: theme.spacing(5),
			},

			"Item-title": {
				width: "100%",
				paddingLeft: theme.spacing(2),
				fontFamily: origStylesClass.fontFamiPicker("basic"),
				fontSize: origStylesClass.fontSizePicker("lg"),
				marginBottom: "5vh",
			},
		});
	})();

export const AppItem = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			AppItem: {
				display: "flex",
				flexDirection: "column",
				height: 300,
				width: 600,
				backgroundColor: origStylesClass.colorPicker("white"),
				maxWidth: "80%",
				marginLeft: "auto",
				marginRight: "auto",
				position: "relative",
				padding: theme.spacing(2),
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

			"AppItem-appName": {
				flexGrow: 1,
				textAlign: "left",
				padding: theme.spacing(2),
				fontSize: origStylesClass.fontSizePicker("lg"),
				fontFamily: origStylesClass.fontFamiPicker("basic"),
				zIndex: 1,
				textShadow: origStylesClass["textShadow-color"]("black"),
				color: "white",
			},
			"AppItem-description": {
				textAlign: "left",
				fontSize: origStylesClass.fontSizePicker("basic"),
				fontFamily: origStylesClass.fontFamiPicker("basic"),
				padding: theme.spacing(3, 3, 0, 3),
				wordBreak: "break-all",
				...origStylesClass["ellipsis-multiLine"](2),
				zIndex: 1,
				textShadow: origStylesClass["textShadow-color"]("black"),
				color: "white",
			},

			/*-*-*-*-* actions *-*-*-*-*/
			"AppItem-actions": {
				textAlign: "right",
				padding: theme.spacing(2),
				zIndex: 1,
			},
			"actions-btn": {
				backgroundColor: origStylesClass.colorPicker("white"),
				margin: theme.spacing(0, 1),
			},
			"actions-faIcon": {},

			"AppItem-img": {
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 0,
			},
			"img-wrapper": {
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 0,
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
