import React, { useRef, useContext, useMemo } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import WeatherContext from "./WeatherContext";
import Tooltip from "@material-ui/core/Tooltip";
import clss from "classnames";

const useStyles = makeStyles((theme) => ({
    inputContainer: {
        display: "flex",
        direction: "row",
    },
    cityField: {
        margin: "0 2px 0 0",
        "& .MuiInputBase-root": {
            color: (props) => props.inputColor,
            fontSize: "19px",
            letterSpacing: "0.03em",
        },
        "& .MuiInputBase-input": {
            padding: "10px 10px 8px",
            height: "30px",
            textTransform: "capitalize",
            "&::placeholder": {
                color: (props) => props.inputColor,
                opacity: 0.25,
            },
        },
        "& .MuiFilledInput-root": {
            borderRadius: "0px",
            backgroundColor: (props) => props.inputBgColor,
        },
        "& .MuiFilledInput-underline:before": {
            borderBottom: "none",
        },
        "& .MuiFilledInput-underline:after": {
            transition: "none",
            borderBottomStyle: "solid",
            borderBottomWidth: "2px",
            borderBottomColor: (props) => props.inputBorderColor,
        },
    },
    countryCodeField: {
        "& .MuiInputBase-root": {
            width: "48px",
        },
        "& .MuiInputBase-input": {
            padding: "10px 0px 8px",
            textAlign: "center",
            textTransform: "uppercase",
        },
    },
    searchBtn: {
        borderRadius: "0",
        margin: "0px 0px 0px 4px",
        height: "48px",
        padding: "0px 0px",
        width: "72px",
        minWidth: "48px",
        color: "white",
        background: (props) => props.searchBgColor,
        [theme.breakpoints.up("sm")]: {
            "&:hover": {
                background: (props) => props.searchBgColorHover,
            },
        },
        "& .MuiButton-contained": {
            boxShadow: "none",
        },
    },
}));
const UserInput = ({ doFetch }) => {
    const { lang, themes, colorTheme, OPENWEATHER_API_KEY } = useContext(
        WeatherContext
    );
    const props = useMemo(() => {
        return colorTheme === themes[0]
            ? {
                  inputColor: "white",
                  inputBgColor: "rgba(186, 214, 224,0.2)",
                  inputBorderColor: "#26c9b4",
                  searchBgColor:
                      "linear-gradient(45deg, rgba(7,111,121,0.6) 0%, rgba(19,157,171,0.6) 100%)",
                  searchBgColorHover:
                      "linear-gradient(45deg, rgba(7,111,121,0.8) 0%, rgba(19,157,171,0.8) 100%)",
              }
            : colorTheme === themes[1]
            ? {
                  inputColor: "#57072a",
                  inputBgColor: "rgba(87, 7, 42,0.2)",
                  inputBorderColor: "#ff006f",
                  searchBgColor:
                      "linear-gradient(45deg, rgba(87,7,42,0.6) 0%, rgba(138,33,79,0.6) 100%)",
                  searchBgColorHover:
                      "linear-gradient(45deg, rgba(87,7,42,0.8) 0%, rgba(138,33,79,0.8) 100%)",
              }
            : null;
    }, [colorTheme, themes]);
    const classes = useStyles(props);
    const cityRef = useRef();
    const countryCodeRef = useRef();

    const getData = () => {
        const city = cityRef.current.value.trim();
        const countryCode = countryCodeRef.current.value.trim();
        if (city) {
            cityRef.current.value = "";
            countryCodeRef.current.value = "";
            doFetch(
                `weather?q=${city}${
                    countryCode ? "," + countryCode : ""
                }&appid=${OPENWEATHER_API_KEY}&units=metric&lang=${lang}`
            );
        }
        cityRef.current.focus();
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            getData();
        }
    };

    return (
        <>
            <div className={classes.inputContainer}>
                <TextField
                    variant="filled"
                    placeholder="City"
                    inputRef={cityRef}
                    onKeyPress={handleKeyPress}
                    className={clss(classes.cityField)}
                    style={{ flex: " 1 1 80px" }}
                />
                <Tooltip title="country code" arrow placement="bottom">
                    <TextField
                        variant="filled"
                        placeholder="CC"
                        inputRef={countryCodeRef}
                        onKeyPress={handleKeyPress}
                        className={clss(
                            classes.cityField,
                            classes.countryCodeField
                        )}
                        inputProps={{
                            maxLength: 2,
                        }}
                    />
                </Tooltip>

                <Button
                    aria-label="search"
                    disableElevation
                    className={clss(classes.searchBtn)}
                    onClick={getData}
                >
                    <SearchIcon />
                </Button>
            </div>
        </>
    );
};

export default UserInput;
