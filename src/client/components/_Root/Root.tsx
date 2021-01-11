import * as React from "react";
import { withRouter, RouteComponentProps, Route, Switch } from "react-router";
import * as H from "history";
import io from "socket.io-client";

//	components
import Test from "./Test";

//	modules
import { RootSocket_Class } from "@src/client/assets/socket.io/root";

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
    //	socket
    const rootSocketClass = new RootSocket_Class();
    rootSocketClass.on();
    //	styles
    const classes = useStyles.Root();

    /********** handlers **********/
    const handleOnClick_clientsCount = (roomName: string) => {
        console.log("roomName", roomName);
        rootSocketClass.clientsCount();
    };

    /********** lifeCycles **********/
    //	init
    React.useEffect(() => {
        if (init) {
            setInit(false);
            rootSocketClass.connect();
        }
    }, [init]);

    /********** return **********/
    return (
        <div className={classes.Root}>
            <Switch>
                <Route path="/test">
                    <Test></Test>
                </Route>

                <Route path="/">
                    <div>Root</div>
                    <Button
                        variant="contained"
                        onClick={() => handleOnClick_clientsCount("root")}
                    >
                        check
                    </Button>
                </Route>

                <Route path="*" exact>
                    <div>other</div>
                </Route>
            </Switch>
        </div>
    );
};

/********** default **********/
export default withRouter(Component);
