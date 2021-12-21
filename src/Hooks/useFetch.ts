import { useRef, useEffect, useReducer } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface Cache {
    [key: string]: string;
}

interface FetchState {
    status: string;
    error: null;
    data: any;
}

interface OtherFetching {
    type: "FETCHED" | "FETCH_ERROR";
    payload: any;
}

interface InitialFetching {
    type: "FETCHING";
}

type FetchAction = InitialFetching | OtherFetching;

const initialState: FetchState = {
    status: "idle",
    error: null,
    data: null,
};

const reducer = (state: FetchState, action: FetchAction) => {
    switch (action.type) {
        case "FETCHING":
            return { ...state, status: "fetching" };
        case "FETCHED":
            return { ...state, status: "fetched", data: action.payload };
        case "FETCH_ERROR":
            return { ...state, status: "error", error: action.payload };
        default:
            return state;
    }
};

export const useFetch = (axiosParams: AxiosRequestConfig) => {
    let url = axiosParams.url as string;
    const cache = useRef<Cache>({});
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        if (!url) return;

        const fetchData = async () => {
            dispatch({ type: "FETCHING" });

            if (cache.current[url]) {
                const data = cache.current[url];
                dispatch({ type: "FETCHED", payload: data });
            } else {
                try {
                    const data = (
                        await axios.request({ ...axiosParams, signal })
                    ).data;

                    cache.current[url] = data;
                    dispatch({ type: "FETCHED", payload: data });
                } catch (error) {
                    dispatch({
                        type: "FETCH_ERROR",
                        payload: "there is an error",
                    });
                }
            }
        };

        fetchData();

        return () => controller.abort();
    }, [url]);

    return { state };
};
