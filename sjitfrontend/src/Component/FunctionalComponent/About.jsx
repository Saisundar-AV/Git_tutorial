import { useState } from 'react';
import '../Css/margin.css';
function About() {
  var statevar = 0;
  var [num,setNum] = useState(statevar);
  function increment() {
    setNum(num+1);
  }
  return (
    <div>
      <h1>About</h1>
      <h2>State initial value is {statevar}</h2>
      <button onClick={() => setNum(num-1)}>-</button>
      <h3>Updating State: {num}</h3>
      <button onClick={increment}>+</button><br/>
      <button onDoubleClick={()=>setNum(statevar)}>Reset</button>
    </div>
  );
}

export default About;