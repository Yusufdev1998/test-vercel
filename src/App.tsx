import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://json-api.uz/api/project/auth-demo/products")
      .then(res => {
        return res.json();
      })
      .then(data => console.log(data))
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>Hi</h2>
    </>
  );
}

export default App;
