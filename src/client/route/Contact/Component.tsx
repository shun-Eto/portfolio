import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";

//	components

//	item components
import Item_Message from "./items/Message/Component";
import Item_SNS from "./items/SNS/Component";

//	materials
import { Hidden } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

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
				<ItemSm {...comnProps} />
			</Hidden>

			{/*-*-*-*-* large *-*-*-*-*/}
			<Hidden xsDown>
				<ItemLg {...comnProps} />
			</Hidden>
		</React.Fragment>
	);
};

/*-*-*-*-* small *-*-*-*-*/
const ItemSm: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	//	styles
	const classes = useStyles.ItemSm({});

	/*-*-*-*-* component *-*-*-*-*/
	return <div></div>;
};

/*-*-*-*-* large *-*-*-*-*/
const ItemLg: React.FC<ComnProps> = (props) => {
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
	const anchorMessage = React.useRef<HTMLDivElement>(null);
	const anchorSNS = React.useRef<HTMLDivElement>(null);
	//	styles
	const classes = useStyles.ItemLg({});

	/*-*-*-*-* handlers *-*-*-*-*/
	//	handleOnScroll_root
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
		if (navigator === "message" && anchorMessage.current) {
			anchorMessage.current.scrollIntoView(true);
		} else if (navigator === "sns" && anchorSNS.current) {
			anchorSNS.current.scrollIntoView(true);
		}
	}, [navigator]);

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item} ref={anchor} onScroll={handleOnScroll_root}>
			{/* Philosophy */}
			<Item_Message lang={lang} anchor={anchorMessage} />

			{/* Profile */}
			<Item_SNS lang={lang} anchor={anchorSNS} />
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
