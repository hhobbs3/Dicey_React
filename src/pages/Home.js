import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {
  const [ name, setName ] = useState("John");
  const [age, setAge] = useState(30);
  const [error, setError] = useState(null);
  const handleClick = (e) => {
    setName("Jane");
    console.log('hello, bloggers', e);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

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

  return (

    <div className="home">


<div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>Dicey, dice made easy</h1>
  <p>Resize this responsive page to see the effect!</p>
</div>

<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4 p-1 border">
      <h3>Player Resources</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4 p-1 border">
      <h3>Game Master Resources</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4 p-1 border">
      {isPending && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs" />} */}
      <button onClick={() => setName('Luigi')}>change name</button>)
      
      <p>{ name }</p>
    </div>
  </div>
</div>
</div>

   );
};

export default Home;
