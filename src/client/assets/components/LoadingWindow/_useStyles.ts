import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
    BasicColors,
    BasicStyles,
} from "@src/client/assets/styles/basicStyles";

/********** useStyles **********/
export const useStyles = () => {
    /********** properties **********/

    /********** return **********/
    return makeStyles((theme: Theme) =>
        createStyles({
            /********** Root **********/
            Root: {
                display: "inline-block",
                width: "100%",
                height: "100%",
            },
            Modal_wrapper: {
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
            },
            Loading: {
                display: "inline-block",
                width: "100%",
                textAlign: "center",
            },
            Icon: {
                display: "inline-block",
                width: "100%",
                height: 65,
                position: "relative",
            },
            Icon_imgWrapper: {
                position: "relative",
                height: 65,
                width: 65,
                display: "inline-block",
            },
            Icon_img: {
                display: "block",
                height: "100%",
                objectFit: "contain",
                animation: "$bound-anim 0.8s infinite",
                position: "absolute",
                margin: "0 auto",
                top: 0,
                left: 0,
            },
            "@keyframes bound-anim": {
                "0%": { top: 0, transform: "scale(1)" },
                "30%": { top: "-25%" },
                "50%": { transform: "scale(1)" },
                "90%": { top: 0, transform: "scale(1.1,0.8)" },
                "100%": { top: 0, transform: "scale(1)" },
            },

            Label: {
                color: BasicColors.brandColor,
                fontSize: BasicStyles.fontSize,
                fontWeight: "bold",
                marginBottom: theme.spacing(2),
            },
            Loading_label: {
                height: BasicStyles.fontSize * 1.5,
            },
            Loading_img: {
                display: "inline-block",
                height: "100%",
                objectFit: "contain",
            },
        })
    )();
};
