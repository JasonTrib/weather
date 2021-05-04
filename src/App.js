import React from "react";
import "./App.css";
import Content from "./Content";
import { WeatherProvider } from "./WeatherContext";

function App() {
    return (
        <div className="App">
            <WeatherProvider>
                <Content />
            </WeatherProvider>
        </div>
    );
}

export default App;
