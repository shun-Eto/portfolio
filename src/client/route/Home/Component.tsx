import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	item compoentns

//	materials
import { Hidden } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types

/*-*-*-*-* component props *-*-*-*-*/
interface OwnProps extends RouteComponentProps {
	history: H.History;
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
interface ComnProps {}
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	//	states
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* comnProps *-*-*-*-*/
	const comnProps: ComnProps = {};

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Root}>
			{/*-*-*-*-* small *-*-*-*-*/}
			<Hidden smUp>
				<HomeSm {...comnProps} />
			</Hidden>

			{/*-*-*-*-* large *-*-*-*-*/}
			<Hidden xsDown>
				<HomeLg {...comnProps} />
			</Hidden>
		</div>
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
	const {} = props;
	//	styles
	const classes = useStyles.HomeLg({});

	/*-*-*-*-* component *-*-*-*-*/
	return <div className={classes.Home}>Home</div>;
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
