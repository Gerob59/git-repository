import { useState } from "react";

export default function Checked() {
  let [checked, setChecked] = useState(false);
  const click = () => setChecked(!checked);
  return (
    <>
      <input type="checkbox" checked={checked} onChange={click} />
      <button className={checked ? "greenButton" : "redButton"} onClick={click}>
        {checked ? "On" : "Off"}
      </button>
    </>
  );
}
