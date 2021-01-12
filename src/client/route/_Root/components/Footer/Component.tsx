import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components
import * as OrigDivider from "@src/client/assets/items/OrigDividers/Component";

//	materials
import {
	ButtonBase,
	Collapse,
	Container,
	Divider,
	Fade,
	Grow,
	Link,
	Slide,
	Toolbar,
	Typography,
	Zoom,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	modules
import * as ListModule from "../../modules/listModule";

//	actions
import * as RootAction from "@src/client/redux/actions/rootAction";

//	reudcers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	styles
import * as useStyles from "./_useStyles";
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStyles = new OrigStylesModule.default();
const listClass = new ListModule.default();

/*-*-*-*-* component props *-*-*-*-*/
interface OwnProps extends RouteComponentProps {
	history: H.History;
	root: RootReducer.StateProps;
	//	actions
	rootActions: {
		update_footer: typeof RootAction.update_footer;
	};
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	const { root } = props;
	const { lang, footer } = root.env;
	//	states
	const headerMenu = listClass.headerMenu;
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/
	//	handleOnClicl_headerMenuItem
	const handleOnClicl_headerMenuItem = (pathname?: string) => {
		if (pathname && pathname !== window.location.pathname) {
			props.rootActions.update_footer(false);
			props.history.push(pathname);
		}
	};

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Slide in={footer} direction="right" unmountOnExit>
			<Toolbar className={classes.Root}>
				<Container maxWidth="md">
					<OrigDivider.Mesh color={origStyles.colorPicker("brandBlack", 0.1)} />

					{/*-*-*-*-* header menu *-*-*-*-*/}
					<div className={classes.menu}>
						{headerMenu.map((item, index) => {
							return (
								<React.Fragment key={index}>
									<ButtonBase
										className={classes["menu-btn"]}
										//	handlers
										onClick={() => handleOnClicl_headerMenuItem(item.pathname)}
									>
										{item.label[lang]}
									</ButtonBase>
									{index !== headerMenu.length - 1 && (
										<Divider
											orientation="vertical"
											flexItem
											className={classes["menu-divider"]}
										/>
									)}
								</React.Fragment>
							);
						})}
					</div>

					{/*-*-*-*-* copyright *-*-*-*-*/}
					<Typography className={classes.copyright}>
						Copyright
						<FontAwesomeIcon
							icon={["fas", "copyright"]}
							className={classes["copyright-faIcon"]}
						/>
						Sopherre Inc. All rights Reserved,
					</Typography>

					{/*-*-*-*-* private *-*-*-*-*/}
					<div className={classes.private}>
						<Link
							href="mailto:prog.shun0830@gmail.com"
							className={classes["private-link"]}
						>
							<FontAwesomeIcon
								icon={["fas", "envelope"]}
								className={classes["private-faIcon"]}
							/>
							prog.shun0830@gmail.com
						</Link>
						<Divider
							className={classes["private-divider"]}
							flexItem
							orientation="vertical"
						/>
						<Link href="tel:09032858560" className={classes["private-link"]}>
							<FontAwesomeIcon
								icon={["fas", "phone-alt"]}
								className={classes["private-faIcon"]}
							/>
							090-3285-8560
						</Link>
					</div>

					<OrigDivider.Mesh color={origStyles.colorPicker("brandBlack", 0.1)} />
				</Container>
			</Toolbar>
		</Slide>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
