import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStylesClass = new OrigStylesModule.default();

/*-*-*-*-* Root *-*-*-*-*/
export const Root = (params: { itemCount: number }) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const { itemCount } = params;
		const unitHeight = 100;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Root: {
				position: "absolute",
				right: "0",
				top: "50%",
				transform: "translate(50% , -50%)",
				zIndex: 1000,
			},

			circle: {
				border: `double 3px ${origStylesClass.colorPicker("blueGray-100")} `,
				display: "inline-block",
				height: unitHeight * itemCount,
				width: 70,
				borderRadius: 30,
			},

			btns: {
				position: "absolute",
				top: "50%",
				right: 38,
				transform: "translate(0,-50%)",
				display: "flex",
				flexDirection: "column",
				zIndex: 101,
			},
			"btns-btn": {
				backgroundColor: origStylesClass.colorPicker("brandWhite"),
				margin: theme.spacing(2, 0),
				border: `double 3px ${origStylesClass.colorPicker("brandBlack", 0.1)}`,
				color: origStylesClass.colorPicker("brandBlack", 0.2),
				transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
				"&:hover": {
					border: `double 3px ${origStylesClass.colorPicker(
						"brandBlack",
						0.4
					)}`,
					backgroundColor: "white",
					color: origStylesClass.colorPicker("brandBlack"),
				},
			},
		});
	})();

/*-*-*-*-* NavButton *-*-*-*-*/
export const NavButtonRoot = (params: { navActive: boolean }) =>
	makeStyles((theme: Theme) => {
		const { navActive } = params;
		const activeStyle: CSSProperties = {
			backgroundColor: "white",
			color: origStylesClass.colorPicker("brandBlack"),
			border: `double 3px ${origStylesClass.colorPicker("brandBlack", 0.4)}`,
		};
		const inActiveStyle: CSSProperties = {
			backgroundColor: origStylesClass.colorPicker("brandWhite"),
			color: origStylesClass.colorPicker("brandBlack", 0.2),
			border: `double 3px ${origStylesClass.colorPicker("brandBlack", 0.1)}`,
		};

		return createStyles({
			NavButton: {
				position: "relative",
				display: "flex",
				flexDirection: "row-reverse",
				alignItems: "center",
				zIndex: 101,
			},

			button: {
				margin: theme.spacing(2, 0),
				transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
				...(() => {
					return navActive ? activeStyle : inActiveStyle;
				})(),

				"&:hover": {
					...activeStyle,
				},
			},

			"label-Paper": {
				flexBasis: 100,
				flexShrink: 0,
				marginRight: theme.spacing(2),
				padding: theme.spacing(1, 2),
				backgroundColor: "white",
				borderRadius: theme.shape.borderRadius,
			},
			"label-Paper-text": {
				whiteSpace: "pre",
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
