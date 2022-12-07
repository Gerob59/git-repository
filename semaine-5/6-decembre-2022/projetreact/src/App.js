import "./app.css";

// import Bouton from "./Components/bouton/Bouton";
// import CheckBox from "./Components/checkbox/Checkbox";
// import Checkboxbutton from "./Components/Checkboxbutton";
// import { useState } from "react";
import { Route, Routes } from "react-router";
import ContactList from "./Components/contact/ContactList";
import Count from "./Components/count/Count";

export default function App() {
  // let [checked, setChecked] = useState(false);
  // const click = () => setChecked(!checked);

  return (
    <>
      <Routes>
        <Route path="/contact" element={<ContactList />} />
        <Route path="/count" element={<Count />} />
      </Routes>
      {/*     
      <Count />
      <CheckBox etat={checked} onChange={click} />
      <Bouton etat={checked} onChange={click} />
      <CheckBox etat={checked} onChange={click} />
      <Bouton etat={checked} onChange={click} />
      <Checkboxbutton />
      <Checkboxbutton /> */}
    </>
  );
}
