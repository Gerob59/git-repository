export default function Checked({ etat, onChange }) {
  return (
    <>
      <button className={etat ? "greenButton" : "redButton"} onClick={onChange}>
        {etat ? "On" : "Off"}
      </button>
    </>
  );
}
