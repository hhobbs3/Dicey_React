const useFetch = () => {
    useEffect(() => {
        //setTimeout(() => { *content }, 1000);
          fetch("http://localhost:8000/blogs")  // need to run following command npx json-server --watch data/db.json --port 8000 
            .then(res => {      // get the response and put in json format
              if(!res.ok) {
                throw Error("Could not fetch the data for blog content");
                console.log(res);
              }
              return res.json(); 
            })
            .then((data) => {  // get the data
              console.log(data);
              setBlogs(data);
              setIsPending(false);
              setError(null);
            })
            .catch(err =>{
              console.log(err.message);
              setError(err.message);
              setIsPending(false);
            })
      }, []);
}