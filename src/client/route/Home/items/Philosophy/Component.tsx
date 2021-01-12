import * as React from "react";

//	components

//	materials
import { Hidden, Typography } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	asset images
import Img_main from "@src/client/assets/images/home-philosophy.png";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const selfClass = new (class {
	form = {
		labels: {
			message: {
				jp:
					"Sopherreの使命は 誰もが智に関する情報を共有できる環境を革新し 認知されること。",
				en: "",
			},
		},
	};
})();

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
	anchor: React.RefObject<HTMLDivElement>;
}
type Props = ComponentProps;
interface ComnProps {
	lang: keyof EnvTypes.Languages;
}
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	const comnProps: ComnProps = { lang };

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Root} ref={props.anchor}>
			{/*-*-*-*-* small *-*-*-*-*/}
			<Hidden smUp>
				<ItemSm {...comnProps} />
			</Hidden>

			{/*-*-*-*-* large *-*-*-*-*/}
			<Hidden xsDown>
				<ItemLg {...comnProps} />
			</Hidden>
		</div>
	);
};

/*-*-*-*-* small *-*-*-*-*/
const ItemSm: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	//	styles
	const classes = useStyles.ItemSm({});

	/*-*-*-*-* component *-*-*-*-*/
	return <div></div>;
};

/*-*-*-*-* large *-*-*-*-*/
const ItemLg: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	const labels = selfClass.form.labels;
	//	styles
	const classes = useStyles.ItemLg({});

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item}>
			<div className={classes.container}>
				<img
					src={Img_main}
					alt="main_img"
					className={classes["container-img"]}
				/>
				<Typography className={classes["container-label"]}>
					{labels.message[lang]}
				</Typography>
			</div>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
