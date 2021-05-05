import React, { useContext, useMemo } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "./WeatherContext";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Typography } from "@material-ui/core";
import clss from "classnames";

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
        background: (props) => props.accordionBgColor,
        "&:hover": {
            background: (props) => props.accordionBgColor,
        },
        [theme.breakpoints.up("sm")]: {
            "&:hover": {
                background: (props) => props.searchBgColorHover,
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
        color: (props) => props.citynameColor,
    },
}));

const LocationInfo = ({ data, doFetch }) => {
    const { lang, themes, colorTheme, OPENWEATHER_API_KEY } = useContext(
        WeatherContext
    );
    const props = useMemo(() => {
        return colorTheme === themes[0]
            ? {
                  searchBgColorHover:
                      "linear-gradient(45deg, rgba(7,111,121,0.8) 0%, rgba(19,157,171,0.8) 100%)",
                  citynameColor: "white",
                  accordionBgColor: "rgba(186, 214, 224,0.2)",
              }
            : colorTheme === themes[1]
            ? {
                  searchBgColorHover:
                      "linear-gradient(45deg, rgba(87,7,42,0.8) 0%, rgba(138,33,79,0.8) 100%)",
                  citynameColor: "#57072a",
                  accordionBgColor: "rgba(87, 7, 42,0.2)",
              }
            : null;
    }, [colorTheme, themes]);
    const classes = useStyles(props);

    const handleRefresh = () => {
        doFetch(
            `weather?q=${data?.name},${data?.sys.country}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=${lang}`
        );
    };

    return (
        <div className={clss(classes.citynameWrapper)}>
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
                    className={clss(classes.refreshBtn)}
                >
                    <RefreshIcon />
                </Button>
            )}
        </div>
    );
};

export default LocationInfo;
