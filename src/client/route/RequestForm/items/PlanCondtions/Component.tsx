import * as React from "react";

//	components

//	conten components
import * as Content_RequestForm from "@src/client/assets/contents/RequestForm/Component";

//	materials
import { Hidden } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	modules
import * as RequestFormModule from "@src/client/assets/contents/RequestForm/modules/selfModule";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const reqFormClass = new RequestFormModule.default();

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	//	styles
	const classes = useStyles.Item({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item}>
			<Content_RequestForm.PlanConditions
				lang={lang}
				document={reqFormClass.testDocument}
			/>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
