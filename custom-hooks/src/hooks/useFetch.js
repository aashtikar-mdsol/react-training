import { useEffect, useState } from "react";

export function useFetch(fetchFunction, initialValue) {
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [data, updateData] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
            setIsFetching(true);
            try {
                const data = await fetchFunction();
                setIsFetching(false);
                updateData(data);
            } catch (error) {
                setError({
                    message:
                        error.message || 'Fetch failed please try again later.',
                });
                setIsFetching(false);
            }
        }
        fetchData();
    }, [fetchFunction]);

    return { isFetching, error, data, updateData }
}