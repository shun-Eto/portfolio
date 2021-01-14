import * as React from "react";

//	components

//	materials
import { Hidden, IconButton, Typography } from "@material-ui/core";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	assets
import Img_Sopherre from "@src/client/assets/images/work-application-sopherre.png";
import Img_Sophic from "@src/client/assets/images/work-application-sophic.png";

//	types
import * as EnvTypes from "@src/types/environment";

interface Applicatipon extends EnvTypes.MenuItem {
	img: string;
	description: EnvTypes.Languages;
	link?: string;
	appStore?: string;
	playStore?: string;
}

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
	anchor: React.RefObject<HTMLDivElement>;
}
type Props = ComponentProps;
interface ComnProps {
	lang: keyof EnvTypes.Languages;
	applications: Applicatipon[];
}
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	//	styles
	const classes = useStyles.Item({});
	//	applications
	const applications: Applicatipon[] = [
		{
			id: "sopherre",
			value: "sopherre",
			label: { jp: "Sopherre", en: "Sopherre" },
			img: Img_Sopherre,
			description: {
				jp: "学習環境の革新を目的としたプラットフォームです。",
				en: "description",
			},
			link: "https://www.sopherre.com",
			playStore:
				"https://play.google.com/store/apps/details?id=com.sopherre.www&hl=ja&gl=US",
		},
		{
			id: "sophic",
			value: "sophic",
			label: { jp: "Sophic", en: "Sophic" },
			img: Img_Sophic,
			description: {
				jp:
					"カードゲームを通して論理的思考を鍛えるアプリです。大人から大人まで楽しめる仕様になっています。",
				en: "description",
			},
			link: "https://sophic.sopherre.com",
			playStore:
				"https://play.google.com/store/apps/details?id=com.sopherre.sophic&hl=ja&gl=US",
			appStore: "https://itunes.apple.com/jp/app/id1531837852?mt=8",
		},
	];

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	const comnProps: ComnProps = {
		lang,
		applications,
	};

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
	const { lang, applications } = props;
	//	styles
	const classes = useStyles.ItemLg({});

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item}>
			<div className={classes["Item-container"]}>
				<Typography className={classes["Item-title"]}>
					業務効率化システム
				</Typography>

				{/*-*-*-*-* Sopherre *-*-*-*-*/}
				{applications.map((app, index) => (
					<div className={classes["Item-element"]} key={index}>
						<AppItem lang={lang} application={app} />
					</div>
				))}
			</div>
		</div>
	);
};

interface AppItemProps {
	lang: keyof EnvTypes.Languages;
	application: Applicatipon;
}
const AppItem: React.FC<AppItemProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, application } = props;
	const { link, playStore, appStore } = application;
	//	styles
	const classes = useStyles.AppItem({});

	/*-*-*-*-* handlers *-*-*-*-*/
	const handleOnClick_btn = (url: string) => {
		const elem_a = document.createElement("a");
		elem_a.setAttribute("href", url);
		elem_a.setAttribute("target", "_blank");
		elem_a.click();
	};

	/*-*-*-*-* small component *-*-*-*-*/
	const AppLink = (args: {
		url: string;
		type: "link" | "play-store" | "app-store";
	}) => {
		const { url, type } = args;
		return (
			<IconButton
				className={classes["actions-btn"]}
				//	handlers
				onClick={() => handleOnClick_btn(url)}
			>
				<FontAwesomeIcon
					size="xs"
					icon={
						type === "play-store"
							? ["fab", "google-play"]
							: type === "app-store"
							? ["fab", "app-store"]
							: ["fas", "link"]
					}
					className={classes["actions-faIcon"]}
				/>
			</IconButton>
		);
	};

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.AppItem}>
			<Typography className={classes["AppItem-appName"]}>
				{`- ${application.label[lang]} -`}
			</Typography>
			<Typography className={classes["AppItem-description"]}>
				{application.description[lang]}
			</Typography>
			<div className={classes["AppItem-actions"]}>
				{link && <AppLink url={link} type="link" />}
				{playStore && <AppLink url={playStore} type="play-store" />}
				{appStore && <AppLink url={appStore} type="app-store" />}
			</div>

			<img src={application.img} alt="" className={classes["AppItem-img"]} />
			<span className={classes["img-wrapper"]} />
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
