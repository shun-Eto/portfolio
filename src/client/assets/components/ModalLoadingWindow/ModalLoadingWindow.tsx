import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	images
import icon_img from "./images/icon.png";
import loading_img from "./images/loading.png";

//	styles
import { useStyles } from "./_useStyles";
import { Modal, LinearProgress } from "@material-ui/core";

//	props
interface OwnProps extends RouteComponentProps {
    history: H.History;
    open: boolean;
}
type Props = OwnProps;

/********** Component **********/
const Component: React.FC<Props> = (props) => {
    /********** properties **********/
    const open = props.open;
    //	styles
    const classes = useStyles();

    /********** handlers **********/

    /********** lifeCycles **********/

    /********** return **********/
    return (
        <Modal open={open} className={classes.Modal}>
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
                    <div className={classes.Loading_label}>
                        <img
                            src={loading_img}
                            className={classes.Loading_img}
                        />
                    </div>

                    {/* LinearProgress */}
                    <LinearProgress color="primary"></LinearProgress>
                </div>
            </div>
        </Modal>
    );
};

/********** default **********/
export default withRouter(Component);
