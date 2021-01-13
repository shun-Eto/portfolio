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
			Item: {
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
			"Item-container": {
				minWidth: "75vw",
				position: "relative",
				padding: theme.spacing(4, 6),
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

			/*-*-*-*-* element *-*-*-*-*/
			"Item-element": {
				textAlign: "center",
				position: "relative",
				zIndex: 2,
				maxWidth: "80%",
				marginTop: theme.spacing(2),
				marginBottom: theme.spacing(2),
				marginLeft: "auto",
				marginRight: "auto",
			},
			"element-text": {
				backgroundColor: "white",
				fontFamily: origStylesClass.fontFamiPicker("basic"),
			},
			"element-label": {
				textShadow: origStylesClass["textShadow-color"]("white"),
			},
			"element-faIcon": {
				marginRight: theme.spacing(1),
			},

			/*-*-*-*-* title *-*-*-*-*/
			"Item-title": {},
			"title-text": {
				fontSize: origStylesClass.fontSizePicker("xl"),
				fontFamily: origStylesClass.fontFamiPicker("basic"),
				color: origStylesClass.colorPicker("brandBlack"),
				textShadow: origStylesClass["textShadow-color"]("white"),
			},

			/*-*-*-*-* message *-*-*-*-*/
			"Item-Message-text": {
				alignItems: "start",
			},

			/*-*-*-*-* submit *-*-*-*-*/
			"Item-submit": {},
			"submit-btn": {
				fontFamily: origStylesClass.fontFamiPicker("basic"),
				textTransform: "unset",
				letterSpacing: 1.2,
			},

			/*-*-*-*-* image *-*-*-*-*/
			"Item-image": {
				position: "absolute",
				top: 0,
				left: 0,
				display: "inline-block",
				height: "100%",
				width: "100%",
				zIndex: 0,
			},
			"image-wrapper": {
				position: "absolute",
				top: 0,
				left: 0,
				display: "inline-block",
				height: "100%",
				width: "100%",
				zIndex: 1,
				backgroundColor: origStylesClass.colorPicker("brandWhite", 0.4),
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
