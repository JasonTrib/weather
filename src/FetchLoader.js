import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "./WeatherContext";
import Loader from "react-loader-spinner";

import { Typography } from "@material-ui/core";
import clss from "classnames";

const customTheme = {
    t1: {
        messageColor: "white",
    },
    t2: {
        messageColor: "#57072a",
    },
};

const useStyles = makeStyles((theme) => ({
    message: {
        fontSize: "30px",
        color: customTheme.t1.messageColor,
    },
    messagePink: {
        color: customTheme.t2.messageColor,
    },
}));

const FetchLoader = ({ data, isLoading }) => {
    const classes = useStyles();
    const { themes, colorTheme } = useContext(WeatherContext);

    return (
        <div
            style={{
                height: "100px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
            }}
        >
            {!data && !isLoading && (
                <Typography
                    className={clss(
                        classes.message,
                        colorTheme === themes[1] && classes.messagePink
                    )}
                >
                    <i>No weather data</i>
                </Typography>
            )}
            <Loader
                type="Oval"
                color={themes[0] ? "#23b0db" : "#23b0db"}
                height={80}
                width={80}
                visible={isLoading}
                style={{
                    height: "80px",
                }}
            />
        </div>
    );
};

export default FetchLoader;
