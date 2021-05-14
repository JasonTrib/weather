import React, { useEffect, useState, useContext, useMemo } from "react";
import useFetch from "./utils/useFetch.js";
import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "./WeatherContext";
import Toolbar from "./Toolbar";
import clss from "classnames";
import tealbg from "./images/tealbg.jpeg";
import pinkbg from "./images/pinkbg.jpeg";
import UserInput from "./UserInput";
import WeatherDetails from "./WeatherDetails";
import WeatherInfo from "./WeatherInfo";
import LocationInfo from "./LocationInfo";
import FetchLoader from "./FetchLoader";

const useStyles = makeStyles((theme) => ({
    cardWrapper: {
        height: "100vh",
        maxHeight: "750px",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
        backgroundSize: "cover",
        backgroundImage: (props) => props.backgroundImage,
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        padding: "10px 10px 10px 10px",
    },
}));

const Content = () => {
    const {
        lang,
        themes,
        colorTheme,
        location,
        setLocation,
        OPENWEATHER_API_KEY,
    } = useContext(WeatherContext);
    const props = useMemo(() => {
        return colorTheme === themes[0]
            ? {
                  backgroundImage: `url(${tealbg})`,
              }
            : colorTheme === themes[1]
            ? {
                  backgroundImage: `url(${pinkbg})`,
              }
            : null;
    }, [colorTheme, themes]);
    const classes = useStyles(props);
    const [{ response, error, isLoading }, doFetch] = useFetch(
        "https://api.openweathermap.org/data/2.5/"
    );
    const [data, setData] = useState(null);
    const [initFetch, setInitFetch] = useState(true);

    //initial fetch upon page load
    useEffect(() => {
        if (initFetch && location.city) {
            setInitFetch(false);
            doFetch(
                `weather?q=${location.city}${
                    location.country ? "," + location.country : ""
                }&appid=${OPENWEATHER_API_KEY}&units=metric&lang=${lang}`
            );
        }
    }, [
        doFetch,
        initFetch,
        lang,
        location?.city,
        location?.country,
        OPENWEATHER_API_KEY,
    ]);

    useEffect(() => {
        if (response) setData(response.data);
    }, [response]);

    // useEffect(() => {
    //     console.log("data:\n" + JSON.stringify(data, null, 4));
    // }, [data]);

    useEffect(() => {
        if (
            data?.name !== location.city ||
            data?.sys.country !== location.country
        ) {
            setLocation({ city: data?.name, country: data?.sys.country });
        }
    }, [
        setLocation,
        data?.name,
        data?.sys.country,
        location.city,
        location.country,
    ]);

    return (
        <>
            <div className={clss(classes.cardWrapper)}>
                <Toolbar />
                <div className={clss(classes.contentWrapper)}>
                    <UserInput doFetch={doFetch} />
                    <FetchLoader data={data} isLoading={isLoading} />
                    <LocationInfo data={data} doFetch={doFetch} />
                    <WeatherInfo data={data} />
                    <WeatherDetails data={data} />
                </div>
            </div>
        </>
    );
};

export default Content;
