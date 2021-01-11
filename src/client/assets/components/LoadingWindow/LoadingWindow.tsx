import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	images
import icon_img from "./images/icon.png";
import loading_img from "./images/loading.png";

//	styles
import { useStyles } from "./_useStyles";

//	props
interface OwnProps extends RouteComponentProps {
    history: H.History;
}
interface FunctionProps {}
type Props = OwnProps & FunctionProps;

/********** Component **********/
const Component: React.FC<Props> = (props) => {
    /********** properties **********/

    //	styles
    const classes = useStyles();

    /********** handlers **********/

    /********** lifeCycles **********/

    /********** return **********/
    return (
        <div className={classes.Root}>
            <div className={classes.Modal_wrapper}>
                <div className={classes.Loading}>
                    {/* Icon */}
                    <div className={classes.Icon}>
                        <div className={classes.Icon_imgWrapper}>
                            <img
                                className={classes.Icon_img}
                                src={icon_img}
                                alt=""
                            />
                        </div>
                    </div>

                    {/* Label */}
                    {/* 
                    <Typography className={classes.Label}>
                        Loading...
                    </Typography>
					*/}
                    <div className={classes.Loading_label}>
                        <img
                            src={loading_img}
                            className={classes.Loading_img}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

/********** default **********/
export default withRouter(Component);
