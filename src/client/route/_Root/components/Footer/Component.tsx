import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components
import * as OrigDivider from "@src/client/assets/items/OrigDividers/Component";

//	materials
import {
	Collapse,
	Fade,
	Grow,
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
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStyles = new OrigStylesModule.default();

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
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Slide in={footer} direction="right" unmountOnExit>
			<div className={classes.Root}>
				<OrigDivider.Mesh color={origStyles.colorPicker("brandBlack", 0.1)} />
				<Typography className={classes.text}>
					Copyright
					<FontAwesomeIcon
						icon={["fas", "copyright"]}
						className={classes["text-faIcon"]}
					/>
					Sopherre Inc. All rights Reserved,
				</Typography>
				<OrigDivider.Mesh color={origStyles.colorPicker("brandBlack", 0.1)} />
			</div>
		</Slide>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
