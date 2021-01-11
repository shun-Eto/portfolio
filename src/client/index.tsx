import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Store from "./redux/store";
import { createBrowserHistory, createHashHistory } from "history";
import { SnackbarProvider } from "notistack";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

//	components
import Root from "./route/_Root/_index";

//	styles
import "./styles.css";

//	FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

//	react datepicker
import "react-datepicker/dist/react-datepicker.css";

const history = (() => {
	if (window.location.href.includes(".html")) {
		return createHashHistory();
	} else {
		return createBrowserHistory();
	}
})();

ReactDOM.render(
	<Provider store={Store}>
		<SnackbarProvider maxSnack={3}>
			<ThemeProvider
				theme={createMuiTheme({
					palette: { primary: {}, secondary: {}, error: {} },
				})}
			>
				<Router history={history}>
					<Root />
				</Router>
			</ThemeProvider>
		</SnackbarProvider>
	</Provider>,
	document.getElementById("root") as HTMLElement
);
