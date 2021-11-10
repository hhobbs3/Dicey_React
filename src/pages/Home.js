import { useState, useEffect } from 'react';
import useFetch from '../custom_hooks/useFetch';
import BlogList from './BlogList';


const Home = () => {
  const [ name, setName ] = useState("John");
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  
  const handleClick = (e) => {
    setName("Jane");
    console.log('hello, bloggers', e);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

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
            {/**/}
            {error && <div>Error: {error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            <button onClick={() => setName('Luigi')}>change name</button>)
            <p>{ name }</p>
          </div>
        </div>
      </div>
</div>

   );
};

export default Home;
