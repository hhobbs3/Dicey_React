import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const abortConst = new AbortController();

        //setTimeout(() => { *content }, 1000);
          fetch(url, { signal: abortConst.signal })  // need to run following command npx json-server --watch data/db.json --port 8000 
            .then(res => {      // get the response and put in json format
              if(!res.ok) {
                throw Error("Could not fetch the data for blog content");
                console.log(res);
              }
              return res.json(); 
            })
            .then((data) => {  // get the data
              console.log(data);
              setData(data);
              setIsPending(false);
              setError(null);
            })
            .catch(err =>{
              if(err.name === 'AbortError') {
                console.log('fetch aborted')
              } else {
              console.log(err.message);
              setError(err.message);
              setIsPending(false);
              }
            })
          return () => abortConst.abort(); //aborts whatever fetch it is associated with
      }, [url]);

      return { data, isPending, error}
}

export default useFetch;