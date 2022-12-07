import "./app.css";
import { Route, Routes } from "react-router";
import ContactList from "./page/ContactList";
import Count from "./Components/count/Count";
import Home from "./page/Home.jsx";
import CheckboxList from "./page/CheckboxList";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <ul>
        <Link to={"/"}>Acceuil</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/count"}>Count</Link>
        <Link to={"/checkbox"}>Checkbox</Link>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactList />} />
        <Route path="/count" element={<Count />} />
        <Route path="/checkbox" element={<CheckboxList />} />
      </Routes>
    </>
  );
}
