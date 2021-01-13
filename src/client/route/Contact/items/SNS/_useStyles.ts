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
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				padding: theme.spacing(4, 6),
				minWidth: "75vw",
				minHeight: "45vh",
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

			"Item-element": {
				width: "100%",
				zIndex: 2,
				maxWidth: "80%",
				marginTop: theme.spacing(2),
				marginBottom: theme.spacing(2),
				marginLeft: "auto",
				marginRight: "auto",
			},

			/*-*-*-*-* commnet *-*-*-*-*/
			"Item-comment": {},
			"comment-text": {
				color: "black",
				textAlign: "center",
				fontFamily: origStylesClass.fontFamiPicker("basic"),
				textShadow: origStylesClass["textShadow-color"]("white"),
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

export const SingleList = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			SingleList: {
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				padding: theme.spacing(1, 2),
				width: "100%",
				flexWrap: "wrap",
				justifyContent: "center",
			},
			"SingleList-btn": {
				width: "100%",
			},

			"SingleList-fbIcon": {
				margin: theme.spacing(0, 1),
			},
			"SingleList-faIcon": {
				margin: theme.spacing(0, 1),
			},
			"SingleList-label": {
				margin: theme.spacing(0, 1),
			},
			"SingleList-id": {
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
