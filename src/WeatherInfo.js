import React, { useEffect, useState, useContext, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "./WeatherContext";
import { Grid, Typography } from "@material-ui/core";
import clss from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCloud,
    faCloudShowersHeavy,
    faSun,
    faMoon,
    faSnowflake,
    faSmog,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
    gridOuter: {
        backgroundColor: (props) => props.gridBgColor,
        color: (props) => props.gridColor,
    },
}));

const iconSize = "6x";
const weatherIcons = {
    Clear: <FontAwesomeIcon icon={faSun} size={iconSize} />,
    Clouds: <FontAwesomeIcon icon={faCloud} size={iconSize} />,
    Rain: <FontAwesomeIcon icon={faCloudShowersHeavy} size={iconSize} />,
    Snow: <FontAwesomeIcon icon={faSnowflake} size={iconSize} />,
    Haze: <FontAwesomeIcon icon={faSmog} size={iconSize} />,
};

const WeatherInfo = ({ data }) => {
    const { isMetric, themes, colorTheme } = useContext(WeatherContext);
    const props = useMemo(() => {
        return colorTheme === themes[0]
            ? {
                  gridColor: "white",
                  gridBgColor: "rgba(186, 214, 224,0.2)",
              }
            : colorTheme === themes[1]
            ? {
                  gridColor: "#57072a",
                  gridBgColor: "rgba(87, 7, 42,0.2)",
              }
            : null;
    }, [colorTheme, themes]);
    const classes = useStyles(props);
    const [temp, setTemp] = useState(null);
    const [isDay, setIsDay] = useState(true);
    const [iconDisplay, setIconDisplay] = useState(null);

    useEffect(() => {
        const weather = data?.weather[0]?.main;
        if (weather === "Clear" && !isDay) {
            setIconDisplay(<FontAwesomeIcon icon={faMoon} size={iconSize} />);
        } else {
            setIconDisplay(weatherIcons[data?.weather[0]?.main]);
        }
    }, [isDay, data?.weather]);

    useEffect(() => {
        let newTemp = data?.main.temp;
        if (newTemp || newTemp === 0) {
            newTemp = isMetric ? newTemp : (newTemp * 9) / 5 + 32;
            setTemp(newTemp?.toFixed());
        } else {
            setTemp(null);
        }
    }, [isMetric, data?.main.temp]);

    useEffect(() => {
        if (!data) {
        } else if (data.dt > data.sys.sunrise && data.dt < data.sys.sunset) {
            setIsDay(true);
        } else {
            setIsDay(false);
        }
    }, [data, data?.dt, data?.sys.sunrise, data?.sys.sunset]);

    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={clss(classes.gridOuter)}
            >
                <Grid item xs={6}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "baseline",
                        }}
                    >
                        <Typography style={{ fontSize: "4.25rem" }}>
                            {((temp || temp === 0) && temp + "°") || ""}
                        </Typography>
                        <Typography style={{ fontSize: "2.5rem" }}>
                            {temp || temp === 0 ? (isMetric ? "C" : "F") : null}
                        </Typography>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={6}
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                >
                    <Grid
                        item
                        style={{
                            paddingTop: "10px",
                        }}
                    >
                        {iconDisplay}
                    </Grid>
                    <Grid item>
                        <Typography>
                            {data?.weather[0]?.description
                                ? data?.weather[0]?.description
                                : ""}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default WeatherInfo;
