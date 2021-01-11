import { makeStyles, Theme, createStyles } from "@material-ui/core";
import {
    BasicColors,
    BasicStyles,
} from "@src/client/assets/styles/basicStyles";

/********** Root **********/
export const Root = (args?: {}) =>
    makeStyles((theme: Theme) => {
        return createStyles({
            Root: {},
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
