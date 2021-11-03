import { useState, useEffect } from "react";



const Roll = () => {
  const [roll, setRoll] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

 const handleSubmit = (min, max) => {

   setRoll(Math.floor(Math.random() * (max - min + 1) + min))
   console.log({roll});
 }

  return (
    <>
    <form class="col-lg-6 offset-lg-3 " onSubmit={handleSubmit}>
    <input type="submit" />
    <button onClick={() => handleSubmit(1, 200)} type="button">Roll D20</button>
  </form>
    <button type="button">Roll D20</button>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}


    </>
  );
};

export default Roll;
