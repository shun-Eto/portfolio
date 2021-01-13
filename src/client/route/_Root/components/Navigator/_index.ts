import Component from "./Component";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateProps } from "@src/client/redux/store";

//	actions
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
type DispatchProps = RootAction.Update_NavId;
const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
	return {
		rootActions: {
			update_navId: (navId: string) => {
				dispatch(RootAction.update_navId(navId));
			},
		},
	};
};

/* * * * * default * * * * */
export default connect(mapStateToProps, mapDispatchToProps)(Component);
