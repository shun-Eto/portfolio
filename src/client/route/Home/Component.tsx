import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	item compoentns
import Philosophy from "./items/Philosophy/Component";
import Profile from "./items/Profile/Component";

//	materials
import { Fade, Hidden } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	actions
import * as RootAction from "@src/client/redux/actions/rootAction";

//	reducers
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
		update_footer: typeof RootAction.update_footer;
	};
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
interface ComnProps {
	lang: keyof EnvTypes.Languages;
	navigator: string;
	//	handlers
	onChange_navigator: (nav: string) => void;
	onChange_footer: (active: boolean) => void;
}
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { root } = props;
	const { lang, navigator } = root.env;
	//	states
	//	styles

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* comnProps *-*-*-*-*/
	const comnProps: ComnProps = {
		lang,
		navigator,
		//	handlers
		onChange_navigator: (nav: string) =>
			props.rootActions.update_navigator(nav),
		onChange_footer: (active: boolean) =>
			props.rootActions.update_footer(active),
	};

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<React.Fragment>
			{/*-*-*-*-* small *-*-*-*-*/}
			<Hidden smUp>
				<HomeSm {...comnProps} />
			</Hidden>

			{/*-*-*-*-* large *-*-*-*-*/}
			<Hidden xsDown>
				<HomeLg {...comnProps} />
			</Hidden>
		</React.Fragment>
	);
};

/*-*-*-*-* small Home *-*-*-*-*/
const HomeSm: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;

	/*-*-*-*-* component *-*-*-*-*/
	return <div></div>;
};

/*-*-*-*-* large Home *-*-*-*-*/
const HomeLg: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { navigator, lang } = props;
	//	states
	const menuCount = 2;
	const [height, setHeight] = React.useState(0);
	//	memo
	const endHeight = React.useMemo(() => {
		return height * (menuCount - 1) - 100;
	}, [height, menuCount]);
	//	anchors
	const anchor = React.useRef<HTMLDivElement>(null);
	const anchorPhilosophy = React.useRef<HTMLDivElement>(null);
	const anchorProfile = React.useRef<HTMLDivElement>(null);
	//	styles
	const classes = useStyles.HomeLg({});

	/*-*-*-*-* handlers *-*-*-*-*/
	const handleOnScroll_root = (e: React.UIEvent<HTMLDivElement>) => {
		const scrollTop = e.currentTarget.scrollTop;
		if (scrollTop === 0 && navigator !== "philosophy") {
			props.onChange_navigator("philosophy");
		} else if (scrollTop === height && navigator !== "profile") {
			props.onChange_navigator("profile");
		}

		const end = endHeight <= scrollTop && scrollTop <= height;
		props.onChange_footer(end);
	};

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	//	anchor
	React.useEffect(() => {
		if (anchor.current) setHeight(anchor.current.clientHeight);
		props.onChange_navigator("philosophy");
	}, [anchor]);
	//	navigator
	React.useEffect(() => {
		if (navigator === "philosophy" && anchorPhilosophy.current) {
			anchorPhilosophy.current.scrollIntoView(true);
		} else if (navigator === "profile" && anchorProfile.current) {
			anchorProfile.current.scrollIntoView(true);
		}
	}, [navigator]);
	//	endHeight
	React.useEffect(() => {
		console.log("endHeight", endHeight);
	}, [endHeight]);

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Fade in={true}>
			<div className={classes.Home} ref={anchor} onScroll={handleOnScroll_root}>
				{/* Philosophy */}
				<Philosophy lang={lang} anchor={anchorPhilosophy} />

				{/* Profile */}
				<Profile lang={lang} anchor={anchorProfile} />
			</div>
		</Fade>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
