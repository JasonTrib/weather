import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "./WeatherContext";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Typography } from "@material-ui/core";
import clss from "classnames";

const customTheme = {
    t1: {
        searchBgColorHover:
            "linear-gradient(45deg, rgba(7,111,121,0.8) 0%, rgba(19,157,171,0.8) 100%)",
        citynameColor: "white",
        accordionBgColor: "rgba(186, 214, 224,0.2)",
    },
    t2: {
        searchBgColorHover:
            "linear-gradient(45deg, rgba(87,7,42,0.8) 0%, rgba(138,33,79,0.8) 100%)",
        citynameColor: "#57072a",
        accordionBgColor: "rgba(87, 7, 42,0.2)",
    },
};

const useStyles = makeStyles((theme) => ({
    refreshBtn: {
        color: "white",
        width: "32px",
        height: "32px",
        position: "absolute",
        right: "0",
        bottom: "2px",
        borderRadius: 0,
        transition: "none",
        "&.MuiButton-root": {
            minWidth: "0",
        },
        background: customTheme.t1.accordionBgColor,
        "&:hover": {
            background: customTheme.t1.accordionBgColor,
        },
        [theme.breakpoints.up("sm")]: {
            "&:hover": {
                background: customTheme.t1.searchBgColorHover,
            },
        },
    },
    refreshBtnPink: {
        background: customTheme.t2.accordionBgColor,
        "&:hover": {
            background: customTheme.t2.accordionBgColor,
        },
        [theme.breakpoints.up("sm")]: {
            "&:hover": {
                background: customTheme.t2.searchBgColorHover,
            },
        },
    },
    citynameWrapper: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingBottom: "20px",
        color: customTheme.t1.citynameColor,
    },
    citynameWrapperPink: {
        color: customTheme.t2.citynameColor,
    },
}));

const LocationInfo = ({ data, doFetch }) => {
    const classes = useStyles();
    const { lang, themes, colorTheme, OPENWEATHER_API_KEY } = useContext(
        WeatherContext
    );

    const handleRefresh = () => {
        doFetch(
            `weather?q=${data?.name},${data?.sys.country}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=${lang}`
        );
    };

    return (
        <div
            className={clss(
                classes.citynameWrapper,
                colorTheme === themes[1] && classes.citynameWrapperPink
            )}
        >
            <Typography style={{ fontSize: "2rem" }}>
                {data?.name || ""}
            </Typography>
            <Typography style={{ fontSize: "1rem" }}>
                {data ? <>&nbsp;{data.sys.country}</> : ""}
            </Typography>
            {data?.name && (
                <Button
                    aria-label="refresh"
                    onClick={handleRefresh}
                    className={clss(
                        classes.refreshBtn,
                        colorTheme === themes[1] && classes.refreshBtnPink
                    )}
                >
                    <RefreshIcon />
                </Button>
            )}
        </div>
    );
};

export default LocationInfo;
