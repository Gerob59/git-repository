import { Route, Routes } from "react-router";
import HomePage from "./page/HomePage";
import EmployePage from "./page/EmployePage";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <ul>
        <Link to={"/Home"}>Home</Link>
        <Link to={"/Employe"}>Employe</Link>
      </ul>
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Employe" element={<EmployePage />} />
      </Routes>
    </>
  );
}
