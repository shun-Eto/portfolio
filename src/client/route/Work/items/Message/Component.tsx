import * as React from "react";

//	components

//	materials
import {
	Button,
	Container,
	Hidden,
	TextField,
	Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	assets
import Img_main from "@src/client/assets/images/contact-message.png";

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
interface ComnProps {
	lang: keyof EnvTypes.Languages;
}
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	//	styles
	const classes = useStyles.Item({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	const comnProps: ComnProps = { lang };

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
	const { lang } = props;
	//	styles
	const classes = useStyles.ItemLg({});

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item}>
			<div className={classes["Item-container"]}>
				{/*-*-*-*-* title *-*-*-*-*/}
				<div className={`${classes["Item-title"]} ${classes["Item-element"]}`}>
					<Typography className={classes["title-text"]}>Message</Typography>
				</div>

				{/*-*-*-*-* name *-*-*-*-*/}
				<div className={classes["Item-element"]}>
					<TextField
						fullWidth
						variant="outlined"
						label="Name"
						size="small"
						color="secondary"
						InputLabelProps={{
							classes: { root: classes["element-label"] },
						}}
						InputProps={{
							classes: { root: classes["element-text"] },
							startAdornment: (
								<FontAwesomeIcon
									icon={["fas", "signature"]}
									className={classes["element-faIcon"]}
								/>
							),
						}}
					/>
				</div>

				{/*-*-*-*-* email *-*-*-*-*/}
				<div className={classes["Item-element"]}>
					<TextField
						fullWidth
						variant={"outlined"}
						label="Email"
						size="small"
						color="secondary"
						InputLabelProps={{
							classes: { root: classes["element-label"] },
						}}
						InputProps={{
							classes: { root: classes["element-text"] },
							startAdornment: (
								<FontAwesomeIcon
									icon={["fas", "envelope"]}
									className={classes["element-faIcon"]}
								/>
							),
						}}
					/>
				</div>

				{/*-*-*-*-* text *-*-*-*-*/}
				<div className={classes["Item-element"]}>
					<TextField
						fullWidth
						multiline
						rows={7}
						variant="outlined"
						size="small"
						label="Message"
						color="secondary"
						InputLabelProps={{
							classes: { root: classes["element-label"] },
						}}
						InputProps={{
							classes: {
								root: `${classes["element-text"]} ${classes["Item-Message-text"]}`,
							},
							startAdornment: (
								<FontAwesomeIcon
									icon={["fas", "pen"]}
									className={classes["element-faIcon"]}
								/>
							),
						}}
					/>
				</div>

				{/*-*-*-*-* submit *-*-*-*-*/}
				<div className={classes["Item-element"]}>
					<Button
						variant="contained"
						color="secondary"
						className={classes["submit-btn"]}
					>
						Submit
					</Button>
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

/*-*-*-*-* default *-*-*-*-*/
export default Component;
