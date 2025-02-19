import { useState } from "react";
function Login() {
  var a="";
  var [sa,con]=useState(a);
  function change() {
    var c=document.getElementById("abc").value;
    con(sa+c);
  }
  return (
    <div>
      <h1>Login</h1>
      <label for="input">Enter Smthg: </label>
      <input type="text" id="abc"></input>
      <button onClick={change}>Add</button>
      <h3>Entered: {sa}</h3> 
      <button onClick={()=>con(a)}>Reset</button> 
    </div>
  );
}

export default Login;