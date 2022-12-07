import { useState } from "react";
import Checkbox from "../Components/checkbox/Checkbox";
import Bouton from "../Components/bouton/Bouton";
import Checkboxbutton from "../Components/Checkboxbutton";

export default function CheckboxList() {
  let [checked, setChecked] = useState(false);
  const click = () => setChecked(!checked);

  return (
    <>
      <Checkbox etat={checked} onChange={click} />
      <Bouton etat={checked} onChange={click} />
      <Checkbox etat={checked} onChange={click} />
      <Bouton etat={checked} onChange={click} />
      <Checkboxbutton />
      <Checkboxbutton />
    </>
  );
}
