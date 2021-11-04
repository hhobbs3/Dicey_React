import { useState, useEffect } from "react";



const Roll = () => {
  const [mod20, setMod20] =useState(0);
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
    <label>Modifier :
      <input type="number" value={mod20} onChange={(e) => setMod20(parseInt(e.target.value))} />
    </label> <br />
    <button onClick={() => handleSubmit(1, 3)} type="button">Roll D20</button>
    <h1 class="d20">{roll}{ mod20 >= 0 ? "+" : " " }{mod20} = {roll + mod20}</h1>
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
