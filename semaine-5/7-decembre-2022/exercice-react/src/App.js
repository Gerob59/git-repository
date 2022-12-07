import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Home from "./page/Home";

export default function App() {
  return (
    <>
      <ul>
        <Link to="/">Acceuil</Link>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
