import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	materials
import {
	AppBar,
	ButtonBase,
	Container,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
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

//	assets
import IMG_logo from "@src/client/assets/images/logo.png";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const listClass = new ListModule.default();

/*-*-*-*-* component props *-*-*-*-*/
interface OwnProps extends RouteComponentProps {
	history: H.History;
	root: RootReducer.StateProps;
	//
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
	const { lang } = root.env;
	//	states
	const [open, setOpen] = React.useState(false);
	const anchor = React.useRef<HTMLButtonElement>(null);
	//	styles
	const classes = useStyles.Root({});
	//	lists
	const headerMenu = listClass.headerMenu;

	/*-*-*-*-* handlers *-*-*-*-*/
	//	handleOnClick_menuItem
	const handleOnClick_menuItem = (pathname?: string) => {
		setOpen(false);
		if (pathname) props.history.push(pathname);
	};

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<AppBar className={classes.Root}>
			<Toolbar>
				<Container maxWidth="md" className={classes.container}>
					{/* logo */}
					<div className={classes.logo}>
						<ButtonBase
							className={classes["logo-btn"]}
							//	handlers
							onClick={() => props.history.push("/")}
						>
							<img src={IMG_logo} alt="logo" className={classes["logo-img"]} />
						</ButtonBase>
					</div>

					{/* menu */}
					<div className={classes.menu}>
						{/* menu button */}
						<IconButton
							ref={anchor}
							//	handlers
							onClick={() => setOpen(true)}
						>
							<FontAwesomeIcon
								size="lg"
								icon={["fas", "align-right"]}
								className={classes["menu-btn-faIcon"]}
							/>
						</IconButton>

						{/* menu */}
						<Menu
							open={open}
							getContentAnchorEl={null}
							anchorEl={anchor.current}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							transformOrigin={{ vertical: "top", horizontal: "center" }}
							//	handlers
							onClose={() => setOpen(false)}
						>
							{headerMenu.map((item, index) => (
								<MenuItem
									key={index}
									onClick={() => handleOnClick_menuItem(item.pathname)}
								>
									{item.faIcon && (
										<ListItemIcon className={classes["menu-icon"]}>
											<FontAwesomeIcon
												{...item.faIcon}
												className={classes["menu-icon-faIcon"]}
											/>
										</ListItemIcon>
									)}
									<ListItemText>{item.label[lang]}</ListItemText>
								</MenuItem>
							))}
						</Menu>
					</div>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
