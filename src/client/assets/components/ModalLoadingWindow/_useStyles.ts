import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
    BasicColors,
    BasicStyles,
} from "@src/client/assets/styles/basicStyles";

/********** useStyles **********/
export const useStyles = () => {
    /********** properties **********/
    const iconSize = 65;

    /********** return **********/
    return makeStyles((theme: Theme) =>
        createStyles({
            /********** Root **********/
            Modal: {},
            Modal_wrapper: {
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                outline: "none",
            },
            Loading: {
                display: "block",
                width: "100%",
                textAlign: "center",
            },
            Icon: {
                display: "block",
                width: "100%",
                height: iconSize,
                position: "relative",
            },
            Icon_imgWrapper: {
                display: "inline-block",
                height: iconSize,
                width: iconSize,
                position: "relative",
            },
            Icon_img: {
                display: "inline-block",
                height: "100%",
                objectFit: "contain",
                animation: "$bound-anim 0.8s infinite",
                position: "absolute",
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
                color: "white",
                fontSize: BasicStyles.fontSize,
                marginBottom: theme.spacing(2),
            },
            Loading_label: {
                height: BasicStyles.fontSize * 1.5,
                marginBottom: theme.spacing(2),
            },
            Loading_img: {
                display: "inline-block",
                height: "100%",
                objectFit: "contain",
            },
        })
    )();
};
