export default function Checked({ etat, onChange }) {
  return (
    <>
      <input type="checkbox" checked={etat} onChange={onChange} />
    </>
  );
}
