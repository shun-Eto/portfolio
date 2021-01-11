declare module "*/owner-2.json" {
	const value: {
		id: string;
		value: string;
		label: { jp: string; en: string };
		list: {
			id: string;
			value: string;
			label: { jp: string; en: string };
			//  orig
			"factor-1": string;
			"factor-2": string;
		}[];
	};
	export = value;
}
