import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	materials
import { AppBar, Container, IconButton, Toolbar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	reudcers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	styles
import * as useStyles from "./_useStyles";

//	asset images
import logo from "@src/client/assets/images/logo.png";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface OwnProps extends RouteComponentProps {
	history: H.History;
	root: RootReducer.StateProps;
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	const { root } = props;
	const { lang } = root.env;
	//	states
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<AppBar className={classes.Root}>
			<Toolbar>
				<Container maxWidth="md" className={classes.container}>
					<div className={classes.logo}>
						<img src={logo} alt="logo" className={classes["logo-img"]} />
					</div>
					<div className={classes.menu}>
						<IconButton>
							<FontAwesomeIcon size="lg" icon={["fas", "bars"]} />
						</IconButton>
					</div>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
