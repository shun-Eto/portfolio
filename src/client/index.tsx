import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import Store from "./redux/store";
import { createBrowserHistory as createHistory } from "history";

//	components
import Root from "./components/_Root/_index";

//	FontAwesomeIconz
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

const history = createHistory();
const windowSize = window.innerWidth;

ReactDOM.render(
    <Provider store={Store}>
        <Router history={history}>
            <Root></Root>
        </Router>
    </Provider>,
    document.getElementById("root") as HTMLElement
);
