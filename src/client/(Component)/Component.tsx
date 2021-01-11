import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	materials

//	styles
import * as useStyles from "./_useStyles";

//	types

//	props
interface OwnProps extends RouteComponentProps {
    history: H.History;
}
interface FunctionProps {}
type Props = OwnProps & FunctionProps;

/********** Component **********/
const Component: React.FC<Props> = (props) => {
    /********** properties **********/
    //	props keys
    //	states
    //	styles
    const classes = useStyles.Root();

    /********** handlers **********/

    /********** lifeCycles **********/

    /********** return **********/
    return <div className={classes.Root}>Component</div>;
};

/********** SubComponent **********/
interface SubComponentProps {}
const SubComponent: React.FC<SubComponentProps> = (props) => {
    /********** properties **********/
    //	props keys
    //	states
    //	styles

    /********** handlers **********/

    /********** lifeCycles **********/

    /********** return **********/
    return (
        <>
            <div>SubComponent</div>
        </>
    );
};

/********** default **********/
export default withRouter(Component);
