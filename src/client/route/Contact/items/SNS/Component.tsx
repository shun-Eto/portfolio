import * as React from "react";
import { useSnackbar } from "notistack";

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

//	classes
const selfClass = new (class {
	snackLabels = {
		mail_clipboard: {
			success: {
				jp: "メールアドレスをコピーしました。",
				en: "Copied email adress.",
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
				{/* twitter */}
				<div className={classes["Item-element"]}>
					<SignleList
						lang={lang}
						faIcon={{ icon: ["fab", "twitter"] }}
						label="Twitter"
						id="Sopherre_1111"
						type="twitter"
					/>
				</div>

				{/* instagram */}
				<div className={classes["Item-element"]}>
					<SignleList
						lang={lang}
						faIcon={{ icon: ["fab", "instagram"] }}
						label="Instagram"
						id="sopherre_1111"
						type="instagram"
					/>
				</div>

				{/* github */}
				<div className={classes["Item-element"]}>
					<SignleList
						lang={lang}
						faIcon={{ icon: ["fab", "github"] }}
						label="GitHub"
						id="shun-Eto"
						type="github"
					/>
				</div>

				{/* github */}
				<div className={classes["Item-element"]}>
					<SignleList
						lang={lang}
						faIcon={{ icon: ["far", "envelope"] }}
						label="Email"
						id="shun.prog0830@gmail.com"
						type="email"
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

/*-*-*-*-* SignleList *-*-*-*-*/
interface SignleListProps {
	lang: keyof EnvTypes.Languages;
	faIcon: FontAwesomeIconProps;
	label: string;
	id: string;
	type: "link" | "email" | "twitter" | "instagram" | "github";
}
const SignleList: React.FC<SignleListProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, faIcon, label, id, type } = props;
	//	states
	//	snackbar
	const snackLabels = selfClass.snackLabels;
	const snack = useSnackbar().enqueueSnackbar;
	//	memo
	const labelId = React.useMemo(() => {
		switch (type) {
			case "twitter":
			case "instagram":
			case "github":
				return `@${id}`;
			default:
				return id;
		}
	}, [id]);
	//	styles
	const classes = useStyles.SingleList({});

	/*-*-*-*-* handlers *-*-*-*-*/
	const handleOnClick_btn = () => {
		const link = document.createElement("a");
		switch (type) {
			case "email":
				link.setAttribute("href", `mailto:${id}`);
				link.click();
				navigator.clipboard.writeText(id).then((val) => {
					console.log(val);
					snack(snackLabels.mail_clipboard.success[lang], {
						variant: "success",
					});
				});
				break;
			case "twitter":
				link.setAttribute("href", `https://twitter.com/${id}`);
				link.setAttribute("target", "_blank");
				link.click();
			case "instagram":
				link.setAttribute("href", `https://www.instagram.com/${id}`);
				link.setAttribute("target", "_blank");
				link.click();
			case "github":
				link.setAttribute("href", `https://github.com/${id}`);
				link.setAttribute("target", "_blank");
			default:
				link.click();
				break;
		}
	};

	/*-*-*-*-* compoent *-*-*-*-*/
	return (
		<ButtonBase
			className={classes["SingleList-btn"]}
			//	handlers
			onClick={handleOnClick_btn}
		>
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
				<Typography className={classes["SingleList-id"]}>{labelId}</Typography>
			</Paper>
		</ButtonBase>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
