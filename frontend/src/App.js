import { useState } from "react";
import axios from "axios";

function App(){
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const register=async()=>{
  await axios.post("http://localhost:3000/register",{email,password});
  alert("created");
 }

 return(
  <div>
   <h1>LogementFacile</h1>
   <input onChange={e=>setEmail(e.target.value)} placeholder="email"/>
   <input onChange={e=>setPassword(e.target.value)} placeholder="password"/>
   <button onClick={register}>Register</button>
  </div>
 );
}

export default App;
