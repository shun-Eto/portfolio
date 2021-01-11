import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
    BasicColors,
    BasicStyles,
} from "@src/client/assets/styles/basicStyles";

/********** ConfirmWindow **********/
export const ConfirmWindow = (args?: {}) =>
    makeStyles((theme: Theme) => {
        return createStyles({
            ConfirmWindow: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },

            "ConfirmWindow-wrapper": {
                minHeight: 100,
                backgroundColor: BasicColors.white,
                borderRadius: 4,
                padding: theme.spacing(2),
                textAlign: "center",
                outline: "none",
            },

            /********** label **********/
            "ConfirmWindow-label": {},

            /********** actions **********/
            "ConfirmWindow-actions": {
                marginTop: theme.spacing(2),
                display: "flex",
                justifyContent: "center",
            },
            "actions-button": {
                margin: theme.spacing(1),
            },
        });
    })();

/*
export const Root = (args?: {}) =>
    makeStyles((theme: Theme) => {
        return createStyles({
            Root: {},
        });
    })();
*/
