import { useEffect, useState } from "react";

function App(){
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    fetch("http://51.20.130.178:8000/api/hello/")
    .then(response => response.json())
    .then(data => setMessage(data.message))
    .catch(error => console.error(error));
  }, []);

  return <h1>{message}</h1>

}

export default App;