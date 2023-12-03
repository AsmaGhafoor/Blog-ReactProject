import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            // fetch('http://localhost:8000/blogs')
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resources')
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);// set nhin kia tha , useState mein null jaa rahi thi values blogs={blogs} idhr
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch abborted')
                    } else {
                        setIsPending(false)
                        setError(err.message)
                        // console.log(err.message)
                    }
                })
        }, 1000)

        return () => abortCont.abort();
    }, [url]);// what does empty array mean?

    return { data, isPending, error }
}

export default useFetch;