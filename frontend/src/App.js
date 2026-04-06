import { useEffect, useState } from "react";
import axios from "axios";

const configuredApi = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_UR;
const API = (configuredApi || "http://localhost:3000").replace(/\/$/, "");

if (!import.meta.env.VITE_API_URL && import.meta.env.VITE_API_UR) {
  console.warn("Variable VITE_API_UR détectée. Renomme-la en VITE_API_URL dans Vercel.");
}

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/properties`)
      .then((res) => setData(res.data))
      .catch(() => setError(`Impossible de charger les propriétés depuis ${API}`));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>LogementFacile</h1>
      {error && <p>{error}</p>}
      {data.map((p) => (
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
