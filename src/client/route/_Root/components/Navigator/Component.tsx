import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	materials
import {
	ButtonBase,
	Collapse,
	Grow,
	IconButton,
	Paper,
	Slide,
	Typography,
	Zoom,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	actions
import * as HomeAction from "@src/client/redux/actions/homeAction";
import * as RootAction from "@src/client/redux/actions/rootAction";

//	reudcers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface OwnProps extends RouteComponentProps {
	history: H.History;
	root: RootReducer.StateProps;
	//	actions
	rootActions: {
		update_navigator: typeof RootAction.update_navigator;
	};
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	const { root } = props;
	const { lang, navigator } = root.env;
	//	states
	const items: EnvTypes.MenuItem[] = [
		{
			id: "philosophy",
			value: "philosophy",
			label: { jp: "Philosophy", en: "Philosophy" },
			faIcon: { icon: ["fas", "graduation-cap"] },
		},
		{
			id: "profile",
			value: "profile",
			label: { jp: "Profile", en: "Profile" },
			faIcon: { icon: ["fas", "user-graduate"] },
		},
	];
	//	styles
	const classes = useStyles.Root({ itemCount: items.length });

	/*-*-*-*-* handlers *-*-*-*-*/
	const handleOnClick_navigator = (nav: string) => {
		props.rootActions.update_navigator(nav);
	};

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Root}>
			<span className={classes.circle} />
			<div className={classes.btns}>
				{items.map((item, index) => (
					<NavButton
						key={index}
						lang={lang}
						item={item}
						navigator={navigator}
						//	handlers
						onClick_navigator={() => handleOnClick_navigator(item.id)}
					/>
				))}
			</div>
		</div>
	);
};

/*-*-*-*-* NavButton *-*-*-*-*/
interface NavButtonProps {
	lang: keyof EnvTypes.Languages;
	item: EnvTypes.MenuItem;
	navigator: string;
	//	hanlders
	onClick_navigator: () => void;
}
const NavButton: React.FC<NavButtonProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, item, navigator } = props;
	//	states
	const [active, setActive] = React.useState<boolean>(false);
	//	styles
	const classes = useStyles.NavButtonRoot({ navActive: navigator === item.id });

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div
			className={classes.NavButton}
			//	handlers
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}
		>
			{/*-*-*-*-* button *-*-*-*-*/}
			<IconButton
				className={classes["button"]}
				//	handlers
				onClick={props.onClick_navigator}
			>
				{item.faIcon && <FontAwesomeIcon {...item.faIcon} fixedWidth />}
			</IconButton>

			{/*-*-*-*-* label *-*-*-*-*/}
			<Zoom in={active} unmountOnExit>
				<Paper
					className={classes["label-Paper"]}
					//	handlers
					onClick={props.onClick_navigator}
					component={ButtonBase}
				>
					<Typography>{item.label[lang]}</Typography>
				</Paper>
			</Zoom>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
