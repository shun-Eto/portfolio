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
		update_navId: typeof RootAction.update_navId;
	};
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	const { root } = props;
	const { lang, navId } = root.env;
	const pathname = window.location.pathname;
	//	states
	const homeNavs: EnvTypes.MenuItem[] = [
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
	const workNavs: EnvTypes.MenuItem[] = [
		{
			id: "application",
			value: "application",
			label: { jp: "アプリ開発", en: "App Development" },
			faIcon: { icon: ["far", "gem"] },
		},
		{
			id: "system",
			value: "system",
			label: {
				jp: "業務システム開発",
				en: "Business System Development",
			},
			faIcon: { icon: ["fas", "desktop"] },
		},
		{
			id: "school",
			value: "school",
			label: { jp: "学習支援", en: "学習支援" },
			faIcon: { icon: ["fas", "school"] },
		},
	];
	const contactNavs: EnvTypes.MenuItem[] = [
		{
			id: "message",
			value: "message",
			label: { jp: "Message", en: "Message" },
			faIcon: { icon: ["fas", "paper-plane"] },
		},
		{
			id: "sns",
			value: "sns",
			label: { jp: "SNS", en: "SNS" },
			faIcon: { icon: ["fab", "battle-net"] },
		},
	];
	const navItems = React.useMemo<EnvTypes.MenuItem[]>(() => {
		switch (pathname) {
			case "/":
				return homeNavs;
			case "/work":
				return workNavs;
			case "/contact":
				return contactNavs;
			default:
				return [];
		}
	}, [pathname]);
	//	styles
	const classes = useStyles.Root({ itemCount: navItems.length });

	/*-*-*-*-* handlers *-*-*-*-*/
	const handleOnClick_navId = (nav: string) => {
		props.rootActions.update_navId(nav);
	};

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Root}>
			<span className={classes.circle} />
			<div className={classes.btns}>
				{navItems.map((item, index) => (
					<NavButton
						key={index}
						lang={lang}
						item={item}
						navId={navId}
						//	handlers
						onClick_navId={() => handleOnClick_navId(item.id)}
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
	navId: string;
	//	hanlders
	onClick_navId: () => void;
}
const NavButton: React.FC<NavButtonProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, item, navId } = props;
	//	states
	const [active, setActive] = React.useState<boolean>(false);
	//	styles
	const classes = useStyles.NavButtonRoot({ navActive: navId === item.id });

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
				onClick={props.onClick_navId}
			>
				{item.faIcon && <FontAwesomeIcon {...item.faIcon} fixedWidth />}
			</IconButton>

			{/*-*-*-*-* label *-*-*-*-*/}
			<Zoom in={active} unmountOnExit>
				<Paper
					className={classes["label-Paper"]}
					//	handlers
					onClick={props.onClick_navId}
					component={ButtonBase}
				>
					<Typography className={classes["label-Paper-text"]}>
						{item.label[lang]}
					</Typography>
				</Paper>
			</Zoom>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
