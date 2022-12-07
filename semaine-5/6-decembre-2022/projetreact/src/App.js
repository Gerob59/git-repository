import "./app.css";
import Contact from "./Components/contact/Contact";
import Count from "./Components/count/Count";
import personnes from "./Data";
import Bouton from "./Components/bouton/Bouton";
import CheckBox from "./Components/checkbox/Checkbox";
import Checkboxbutton from "./Components/Checkboxbutton";
import { useState } from "react";

export default function App() {
  let [checked, setChecked] = useState(false);
  const click = () => setChecked(!checked);

  return (
    <>
      <Count />
      <div className="Contacts">
        {personnes.map((personne, index) => (
          <Contact key={index} {...personne} />
        ))}
      </div>
      <CheckBox etat={checked} onChange={click} />
      <Bouton etat={checked} onChange={click} />

      <CheckBox etat={checked} onChange={click} />
      <Bouton etat={checked} onChange={click} />

      <Checkboxbutton />
      <Checkboxbutton />
      <Checkboxbutton />
    </>
  );
}
