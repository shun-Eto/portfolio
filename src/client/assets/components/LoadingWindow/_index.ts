import Component from "./LoadingWindow";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "@src/client/redux/store";

//	actions

/********** State **********/
const mapStateToProps = (state: AppState) => {
    return {};
};

/********** Dispatch **********/
type DispatchProps = any;
const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
    return {};
};

/********** default **********/
export default connect(mapStateToProps, mapDispatchToProps)(Component);
