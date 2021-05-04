import React, { createContext } from "react";
import useLocalStorage from "./utils/useLocalStorage.js";

export const WeatherContext = createContext();

const OPENWEATHER_API_KEY = "b89977de37d4889c2867f0700af6e9c4";
const themes = ["teal", "pink"];

export const WeatherProvider = (props) => {
    const [lang, setLang] = useLocalStorage("language", "EN");
    const [isMetric, setIsMetric] = useLocalStorage(
        "measurementsInMetric",
        true
    );
    const [colorTheme, setColorTheme] = useLocalStorage("theme", themes[0]);
    const [location, setLocation] = useLocalStorage("location", {
        city: null,
        country: null,
    });

    return (
        <WeatherContext.Provider
            value={{
                lang,
                setLang,
                isMetric,
                setIsMetric,
                themes,
                colorTheme,
                setColorTheme,
                location,
                setLocation,
                OPENWEATHER_API_KEY,
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;
