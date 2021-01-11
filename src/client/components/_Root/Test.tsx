import * as React from "react";
import { withRouter, RouteComponentProps, Route, Switch } from "react-router";
import * as H from "history";
import io from "socket.io-client";

//	modules
import { TestSocket_Class } from "@src/client/assets/socket.io/test";

//	materials
import {
    Slide,
    Button,
    List,
    ListItem,
    Select,
    MenuItem,
    TextField,
} from "@material-ui/core";

//	styles
import * as useStyles from "./_useStyles";

//	types

//	socket

//	props
interface OwnProps extends RouteComponentProps {
    history: H.History;
}
interface FunctionProps {}
type Props = OwnProps & FunctionProps;

/********** Component **********/
const Component: React.FC<Props> = (props) => {
    /********** properties **********/
    //	states
    const [text, setText] = React.useState("init");
    const [init, setInit] = React.useState(true);
    const [select, setSelect] = React.useState("");
    const [room, setRoom] = React.useState("");
    const [broadcast, setBroadcast] = React.useState("");
    //	classes
    const testSocketClass = new TestSocket_Class();
    testSocketClass.on();
    //	styles
    const classes = useStyles.Root();

    /********** handlers **********/
    const handleOnClick_checkRoomCount = (roomName: string) => {
        console.log("roomName", roomName);
    };

    /********** lifeCycles **********/
    //	init
    React.useEffect(() => {
        if (init) {
            setInit(false);
        }
    }, [init]);

    /********** return **********/
    return (
        <div className={classes.Root}>
            <div>test</div>
        </div>
    );
};

/********** default **********/
export default withRouter(Component);
