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
				zIndex: 0,
				padding: theme.spacing(0, 6, 5, 6),
				letterSpacing: 1.3,
				fontSize: origStylesClass.fontSizePicker("lg"),
				fontFamily: origStylesClass.fontFamiPicker("basic"),
				color: origStylesClass.colorPicker("brandWhite"),
				textShadow: origStylesClass["textShadow-color"](
					origStylesClass.colorPicker("brandBlack")
				),
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
