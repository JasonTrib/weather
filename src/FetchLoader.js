import React, { useContext, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "./WeatherContext";
import Loader from "react-loader-spinner";
import { Typography } from "@material-ui/core";
import clss from "classnames";

const useStyles = makeStyles((theme) => ({
    message: {
        fontSize: "30px",
        color: (props) => props.messageColor,
    },
}));

const FetchLoader = ({ data, isLoading }) => {
    const { themes, colorTheme } = useContext(WeatherContext);
    const props = useMemo(() => {
        return colorTheme === themes[0]
            ? {
                  messageColor: "white",
              }
            : colorTheme === themes[1]
            ? {
                  messageColor: "#57072a",
              }
            : null;
    }, [colorTheme, themes]);
    const classes = useStyles(props);

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
                <Typography className={clss(classes.message)}>
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
