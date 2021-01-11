import Component from "./Component";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateProps } from "@src/client/redux/store";

//	actions
import * as HomeAction from "@src/client/redux/actions/homeAction";
import * as RootAction from "@src/client/redux/actions/rootAction";

//	reducers
import * as HomeReducer from "@src/client/redux/reducers/homeReducer";

/* * * * * props * * * * */
const mapStateToProps = (state: AppStateProps) => {
	return {
		root: state.root,
		home: state.home,
	};
};

/* * * * * dispatch * * * * */
type DispatchProps = HomeAction.Update_Navigator;
const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
	return {
		rootActions: {
			update_navigator: (navigator: string) => {
				dispatch(RootAction.update_navigator(navigator));
			},
		},
	};
};

/* * * * * default * * * * */
export default connect(mapStateToProps, mapDispatchToProps)(Component);
