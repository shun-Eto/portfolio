import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	materials
import { Modal, Container, Typography, Button } from "@material-ui/core";

//	styles
import * as useStyles from "./_useStyles";

//	types
export interface ConfirmDetail {
    label?: string;
    destructive?: boolean;
}

//	props
interface OwnProps extends RouteComponentProps {
    history: H.History;
    open: boolean;
    detail?: ConfirmDetail;
    onClose?: () => void;
    onClick_action?: (result: boolean) => void;
}
interface FunctionProps {}
type Props = OwnProps & FunctionProps;

/********** ConfirmWindow **********/
const ConfirmWindow: React.FC<Props> = (props) => {
    /********** properties **********/
    //	props keys
    const open = props.open;
    const destructive = props.detail?.destructive || false;
    const label = props.detail?.label || "";
    //	styles
    const classes = useStyles.ConfirmWindow();

    /********** handlers **********/
    //	handleOnClose
    const handleOnClose = () => {
        if (props.onClose) props.onClose();
    };
    //	handleOnClick_action
    const handleOnClick_action = (result: boolean) => {
        if (props.onClick_action) props.onClick_action(result);
    };

    /********** lifeCycles **********/

    /********** return **********/
    return (
        <Modal
            open={open}
            onClose={handleOnClose}
            className={classes.ConfirmWindow}
        >
            <Container
                className={classes["ConfirmWindow-wrapper"]}
                maxWidth="xs"
            >
                {/* label */}
                <div className={classes["ConfirmWindow-label"]}>
                    <Typography>{label}</Typography>
                </div>

                {/* actions */}
                <div
                    className={classes["ConfirmWindow-actions"]}
                    style={
                        destructive
                            ? { flexDirection: "row" }
                            : { flexDirection: "row-reverse" }
                    }
                >
                    <Button
                        variant="contained"
                        className={classes["actions-button"]}
                        color="primary"
                        size="small"
                        onClick={() => handleOnClick_action(true)}
                    >
                        OK
                    </Button>
                    <Button
                        variant="contained"
                        className={classes["actions-button"]}
                        size="small"
                        onClick={() => handleOnClick_action(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </Container>
        </Modal>
    );
};

/********** default **********/
export default withRouter(ConfirmWindow);
