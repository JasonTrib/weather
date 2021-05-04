import { useState, useEffect, useCallback } from "react";
import axios from "axios";

/*
1) initialize hook:
    const [{ response, error, isLoading }, doFetch] = useFetch( <<string of the base ULR here>> );
2) calling doFetch:
    doFetch( <<string of the path ULR here>> [, <<axios options object>> ] );
*/

const useFetch = (domainURL) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState({});
    const [pathURL, setpathURL] = useState("");

    const doFetch = (pathURL = "", options = {}) => {
        setOptions(options);
        setpathURL(pathURL);
        setIsLoading(true);
    };

    const fetchData = useCallback(async () => {
        try {
            const res = await axios.get(domainURL + pathURL, options);
            setResponse(res);
        } catch (e) {
            const err = e.stack;
            setError(err);
            setResponse(null);
            console.error(err);
        }
        setIsLoading(false);
    }, [domainURL, pathURL, options]);

    useEffect(() => {
        if (!isLoading) {
            return;
        }
        fetchData();
    }, [isLoading, fetchData]);

    return [{ response, error, isLoading }, doFetch];
};

export default useFetch;
