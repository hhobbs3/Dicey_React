import { useState, useEffect } from "react";



const Roll = () => {
  const [roll20, setRoll20] = useState(0);
  const [roll12, setRoll12] = useState(0);
  const [roll10, setRoll10] = useState(0);
  const [roll8, setRoll8] = useState(0);
  const [roll6, setRoll6] = useState(0);
  const [roll4, setRoll4] = useState(0);
  const [roll2, setRoll2] = useState(0);
  const [rollC, setRollC] = useState(0);
  const [rollCMax, setRollCMax] = useState(0);

  const [rollSum, setRollSum] = useState(0);

  const [mod20, setMod20] =useState(0);
  const [mod12, setMod12] =useState(0);
  const [mod10, setMod10] =useState(0);
  const [mod8, setMod8] =useState(0);
  const [mod6, setMod6] =useState(0);
  const [mod4, setMod4] =useState(0);
  const [mod2, setMod2] =useState(0);
  const [modC, setModC] =useState(0);


  const [data, setData] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
      console.log('useEffect')
 }, [roll20]);

 const handleSubmit = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min)
 }

 const createRollOutput = (mod, roll) => {
   var newVal = mod + roll;
   console.log(newVal);
   //setRollSum(rollSum + newVal);
   return <span>{roll}{ mod >= 0 ? "+" : " " }{mod} = {roll + mod}</span>;
 }

  return (
    <>
    {/*Need to understand how to separate button actions so that createRollOutput doesn't update all rolls*/}
    <div class="container mt-3">
      <label>Modifier :
        <input type="number" value={mod20} onChange={(e) => setMod20(parseInt(e.target.value))} />
      </label>
      <button class="btn btn-primary" onClick={() => setRoll20(handleSubmit(1, 20))} type="button">Roll D20</button>
      <span>{createRollOutput(mod20, roll20)}</span> <br />
      <label>Modifier :
        <input type="number" value={mod12} onChange={(e) => setMod12(parseInt(e.target.value))} />
      </label>
      <button class="btn btn-primary" onClick={() => setRoll12(handleSubmit(1, 12))} type="button">Roll D12</button>
      <span>{createRollOutput(mod12, roll12)}</span> <br />
      <label>Modifier :
        <input type="number" value={mod10} onChange={(e) => setMod10(parseInt(e.target.value))} />
      </label>
      <button class="btn btn-primary" onClick={() => setRoll10(handleSubmit(1, 10))} type="button">Roll D10</button>
      <span>{createRollOutput(mod10, roll10)}</span> <br />
      <label>Modifier :
        <input type="number" value={mod8} onChange={(e) => setMod8(parseInt(e.target.value))} />
      </label>
      <button class="btn btn-primary" onClick={() => setRoll8(handleSubmit(1, 8))} type="button">Roll D8</button>
      <span>{createRollOutput(mod8, roll8)}</span> <br />
      <label>Modifier :
        <input type="number" value={mod6} onChange={(e) => setMod6(parseInt(e.target.value))} />
      </label>
      <button class="btn btn-primary" onClick={() => setRoll6(handleSubmit(1, 6))} type="button">Roll D6</button>
      <span>{createRollOutput(mod6, roll6)}</span> <br />
      <label>Modifier :
        <input type="number" value={mod4} onChange={(e) => setMod4(parseInt(e.target.value))} />
      </label>
      <button class="btn btn-primary" onClick={() => setRoll4(handleSubmit(1, 4))} type="button">Roll D4</button>
      <span>{createRollOutput(mod4, roll4)}</span> <br />
      <label>Modifier :
        <input type="number" value={mod2} onChange={(e) => setMod2(parseInt(e.target.value))} />
      </label>
      <button class="btn btn-primary" onClick={() => setRoll2(handleSubmit(1, 2))} type="button">Roll D2</button>
      <span>{createRollOutput(mod2, roll2)}</span> <br />
      <label>Modifier :
        <input type="number" value={modC} onChange={(e) => setModC(parseInt(e.target.value))} />
        <input type="number" value={rollCMax} onChange={(e) => setRollCMax(parseInt(e.target.value))} />
      </label>
      <button class="btn btn-primary" onClick={() => setRollC(handleSubmit(1, rollCMax))} type="button">Roll Custom</button>
      <span>{createRollOutput(modC, rollC)}</span> <br />
    </div>

    </>
  );
};

export default Roll;
