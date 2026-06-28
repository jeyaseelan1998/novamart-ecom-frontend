/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/exhaustive-deps */
import { get } from "lodash";
import { useEffect, useRef, useState } from "react";

import api from "../../helper/api";
import { toast } from "react-toastify";

export default function Fetch({ onComplete = () => { }, onError = () => { }, method = 'get', headers = {}, paramsData = {}, url = '', render = () => { }, loadOnMount = false, showToast = true }) {
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const signalRef = useRef(new AbortController());

    const loadFromAPI = () => setRefresh(true);

    const startFetching = async () => {
        try {
            setFetching(true);
            let fetchFunction = api.get;
            if (method === 'put') fetchFunction = api.put;
            if (method === 'post') fetchFunction = api.post;
            if (method === 'patch') fetchFunction = api.patch;
            if (method === 'delete') fetchFunction = api.delete;

            let options = {
                params: paramsData,
            };
            if (['post', 'patch', 'put'].includes(method)) {
                options = {
                    data: paramsData,
                };
            }

            const response = await fetchFunction(url, {
                ...options,
                method,
                headers,
                signal: signalRef.current.signal
            });

            if (get(response, 'data.success')) {
                setData(get(response, 'data'));
                setStatus(200);
                toast.success(get(response, 'data.message'));
            } else {
                setError(get(response, 'data.message'));
                setStatus(get(response, 'data.status'));
            }
            setFetching(false);
            setRefresh(false);
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setStatus(500);
        }

    }

    useEffect(() => {
        if (refresh !== false && url) {
            startFetching();
        }

        return () => {
            signalRef.current?.abort();
        }
    }, [refresh, url])

    useEffect(() => {
        if (error) {
            onError({ error, status });
        }
    }, [error])

    useEffect(() => {
        if (data) {
            onComplete({ data, status });
        }
    }, [data])

    useEffect(() => {
        if (loadOnMount) {
            loadFromAPI();
        }
    }, [loadOnMount])

    return (
        <>
            {
                render !== false && render({ fetching, status, data, loadFromAPI })
            }
        </>
    )
}