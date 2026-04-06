import { useEffect, useState } from "react";
import axios from "axios";

const API = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/$/, "");

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/properties`)
      .then((res) => setData(res.data))
      .catch(() => setError("Impossible de charger les propriétés"));
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
