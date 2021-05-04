import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "./WeatherContext";
import { MenuItem, Select, FormControl } from "@material-ui/core";
import PaletteIcon from "@material-ui/icons/Palette";
import clss from "classnames";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        width: "100%",
        display: "flex",
        direction: "row",
        justifyContent: "flex-start",
        padding: "20px 0px",
        background:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
    },
    toolbarBtn: {
        margin: "0px 10px",
        borderRadius: "20px",
        width: "64px",
        minWidth: "10px",
        color: "white",
        border: "1px solid rgba(255,255,255,0.2)",
        padding: "0px 0px",
        height: "40px",
        "& .MuiButton-root": {
            transition: "none",
        },
        [theme.breakpoints.up("sm")]: {
            "&:hover": {
                border: "1px solid rgba(127,127,127,1)",
                background:
                    "linear-gradient(180deg, rgba(7,111,121,0.6) 0%, rgba(7,111,121,0.2) 100%)",
            },
        },
    },
    toolbarBtnPink: {
        [theme.breakpoints.up("sm")]: {
            "&:hover": {
                background:
                    "linear-gradient(180deg, rgba(87,7,42,0.6) 0%, rgba(87,7,42,0.2) 100%)",
            },
        },
    },
    langSelect: {
        "& .MuiSelect-root": {
            padding: "0px 10px 0px 0px",
        },
        "& .MuiSelect-icon": {
            color: "white",
        },
    },
    selectMenu: {
        // "& .MuiList": {
        //     padding: "0px 0px",
        // },
        // "& .MuiList-root": {
        //     padding: "0px 0px",
        // },
        // "& .MuiList-padding": {
        //     padding: "0px 0px",
        // },
        // "& .MuiPaper-root": {
        //     padding: "0px 0px",
        // },
        // "& .MuiPopover-root": {
        //     padding: "0px 0px",
        // },
        // "& .MuiSelect-selectMenu": {
        //     padding: "0px 0px",
        // },
        // "& .MuiMenu-list": {
        //     padding: "0px 0px",
        // },
    },
}));

const langList = ["EN", "EL", "FR", "GE", "ES", "PT", "RU"];

const Toolbar = () => {
    const classes = useStyles();
    const {
        lang,
        setLang,
        isMetric,
        setIsMetric,
        themes,
        colorTheme,
        setColorTheme,
    } = useContext(WeatherContext);

    const handleLanguageChange = (event) => {
        setLang(event.target.value);
    };

    const handleDegreeToggle = (e) => {
        setIsMetric((prev) => !prev);
    };

    const handleThemeChange = () => {
        let idx = themes.findIndex((x) => x === colorTheme);
        if (idx >= themes.length - 1) {
            idx = 0;
        } else {
            idx += 1;
        }
        setColorTheme(themes[idx]);
    };

    return (
        <div className={classes.toolbar}>
            <Button
                aria-label="units"
                onClick={handleDegreeToggle}
                className={clss(
                    classes.toolbarBtn,
                    colorTheme === themes[1] && classes.toolbarBtnPink
                )}
            >
                {isMetric ? "°C" : "°F"}
            </Button>
            <Button
                aria-label="theme"
                onClick={handleThemeChange}
                className={clss(
                    classes.toolbarBtn,
                    colorTheme === themes[1] && classes.toolbarBtnPink
                )}
            >
                <PaletteIcon />
            </Button>
            <FormControl className={clss(classes.formControl)}>
                <Select
                    value={lang}
                    onChange={handleLanguageChange}
                    displayEmpty
                    disableUnderline
                    className={clss(
                        classes.langSelect,
                        classes.toolbarBtn,
                        colorTheme === themes[1] && classes.toolbarBtnPink
                    )}
                    inputProps={{ "aria-label": "Without label" }}
                >
                    {langList.map((e) => {
                        return (
                            <MenuItem
                                className={classes.selectMenu}
                                key={e}
                                value={e}
                            >
                                {e}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </div>
    );
};

export default Toolbar;
