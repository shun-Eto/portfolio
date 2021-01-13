import * as React from "react";

//	components

//	materials
import { ButtonBase, Hidden, Paper, Typography } from "@material-ui/core";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

//	assets
import Img_main from "@src/client/assets/images/contact-sns.png";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
	anchor: React.RefObject<HTMLDivElement>;
}
type Props = ComponentProps;
interface ComnProps {}
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	//	states
	//	styles
	const classes = useStyles.Item({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	const comnProps: ComnProps = {};

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item} ref={props.anchor}>
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
	const {} = props;
	//	styles
	const classes = useStyles.ItemLg({});

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item}>
			<div className={classes["Item-container"]}>
				{/* twitter */}
				<div className={classes["Item-element"]}>
					<SignleList
						faIcon={{ icon: ["fab", "twitter"] }}
						label="Twitter"
						id="@Sopherre_1111"
					/>
				</div>

				{/* instagram */}
				<div className={classes["Item-element"]}>
					<SignleList
						faIcon={{ icon: ["fab", "instagram"] }}
						label="Instagram"
						id="@sopherre_1111"
					/>
				</div>

				{/* github */}
				<div className={classes["Item-element"]}>
					<SignleList
						faIcon={{ icon: ["fab", "github"] }}
						label="GitHub"
						id="@shun-Eto"
					/>
				</div>

				{/* github */}
				<div className={classes["Item-element"]}>
					<SignleList
						faIcon={{ icon: ["far", "envelope"] }}
						label="Email"
						id="shun.prog0830@gmail.com"
					/>
				</div>

				{/* comment */}
				<div
					className={`${classes["Item-element"]} ${classes["Item-comment"]}`}
				>
					<Typography className={classes["comment-text"]}>
						お気軽にDMやコンタクトください！
						<br />
						共同開発やプログラミングの学習支援もさせて頂いています！
					</Typography>
				</div>

				{/*-*-*-*-* image *-*-*-*-*/}
				<img
					src={Img_main}
					alt="main image"
					className={classes["Item-image"]}
				/>
				<span className={classes["image-wrapper"]} />
			</div>
		</div>
	);
};

interface SignleListProps {
	faIcon: FontAwesomeIconProps;
	label: string;
	id: string;
}
const SignleList: React.FC<SignleListProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { faIcon, label, id } = props;
	//	styles
	const classes = useStyles.SingleList({});

	/*-*-*-*-* compoent *-*-*-*-*/
	return (
		<ButtonBase className={classes["SingleList-btn"]}>
			<Paper className={classes.SingleList}>
				{/* fb icon */}
				<FontAwesomeIcon
					{...faIcon}
					fixedWidth
					size="lg"
					className={classes["SingleList-fbIcon"]}
				/>

				{/* label */}
				<Typography className={classes["SingleList-label"]}>{label}</Typography>

				{/* fa icon */}
				<FontAwesomeIcon
					icon={["fas", "angle-double-right"]}
					className={classes["SingleList-faIcon"]}
				/>

				{/* id */}
				<Typography className={classes["SingleList-id"]}>{id}</Typography>
			</Paper>
		</ButtonBase>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
