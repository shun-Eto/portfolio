import * as React from "react";

//	components

//	materials
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Hidden,
	IconButton,
	Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	asset images
import Img_main from "@src/client/assets/images/home-profile.png";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
interface Profile {
	name: EnvTypes.Languages;
	work: EnvTypes.Languages;
	details: EnvTypes.Languages;
	program: EnvTypes.Languages;
}
const selfClass = new (class {
	profile: Profile = {
		name: { jp: "江藤 駿 [ Eto Shun ]", en: "江藤 駿 [ Eto Shun ]" },
		work: {
			jp: "Sopherre Inc. | CTO | Programmer",
			en: "Sopherre Inc. | CTO | Programmer",
		},
		details: {
			jp: "27 | Tokyo/JP | Piano | Soccer | Books",
			en: "27 | Tokyo/JP | Piano | Soccer | Books",
		},
		program: {
			jp: "Javascript | Typescript | ReactJS | NodeJS | MongoDB",
			en: "Javascript | Typescript | ReactJS | NodeJS | MongoDB",
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
	const profile = selfClass.profile;
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

				<div className={classes["container-profile"]}>
					<ProfileForm lang={lang} profile={profile} />
				</div>
			</div>
		</div>
	);
};

interface ProfileFormProps {
	lang: keyof EnvTypes.Languages;
	profile: Profile;
}
const ProfileForm: React.FC<ProfileFormProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { profile, lang } = props;
	//	styles
	const classes = useStyles.ProfileForm({});

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.ProfileForm}>
			{/*-*-*-*-* name *-*-*-*-*/}
			<Typography className={`${classes.name} ${classes["ProfileForm-text"]}`}>
				{profile.name[lang]}
			</Typography>

			{/*-*-*-*-* work *-*-*-*-*/}
			<Typography className={`${classes.work} ${classes["ProfileForm-text"]}`}>
				<FontAwesomeIcon
					icon={["far", "smile"]}
					fixedWidth
					className={classes.faIcon}
				/>
				{profile.work[lang]}
			</Typography>

			{/*-*-*-*-* details *-*-*-*-*/}
			<Typography
				className={`${classes.details} ${classes["ProfileForm-text"]}`}
			>
				<FontAwesomeIcon
					icon={["far", "bookmark"]}
					fixedWidth
					className={classes.faIcon}
				/>
				{profile.details[lang]}
			</Typography>

			{/*-*-*-*-* program *-*-*-*-*/}
			<Typography
				className={`${classes.program} ${classes["ProfileForm-text"]}`}
			>
				<FontAwesomeIcon
					icon={["fas", "desktop"]}
					fixedWidth
					className={classes.faIcon}
				/>
				{profile.program[lang]}
			</Typography>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
