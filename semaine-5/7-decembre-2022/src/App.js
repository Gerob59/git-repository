import "./reset.css";
import "./app.css";
import HomePage from "./page/HomePage"
import EmployePage from "./page/EmployePage"
import { useState } from "react";

export default function App() {
  let [clicked, onClick] = useState (false);
  const click = () => onClick(!clicked);
  return (
    <div className="App">
      <div className="HomePage" etat={clicked} onClick={click}>
        <HomePage />
      </div>
      <div className="EmployePage" etat={clicked} onClick={click}>
        <EmployePage />
      </div>
    </div>
  );
}
