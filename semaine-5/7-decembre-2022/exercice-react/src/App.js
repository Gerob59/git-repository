import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import HomePage from "./page/HomePage";
import EmployePage from "./page/EmployePage";

export default function App() {
  return (
    <>
      <ul>
        <Link to="/">Acceuil</Link>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<EmployePage />} />
      </Routes>
    </>
  );
}
