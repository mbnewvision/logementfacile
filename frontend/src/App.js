import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://logementfacile-production.up.railway.app";

function App(){
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get(API+"/properties")
    .then(res=>setData(res.data));
  },[]);

  return (
    <div style={{padding:20}}>
      <h1>LogementFacile</h1>
      {data.map((p)=>(
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.price} FCFA</p>
          <p>{p.location}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
