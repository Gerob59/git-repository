import "./employe.css";
export default function Employe({ photo, nom, poste }) {
  return (
    <div className="EmployeListItem">
      <img src={photo} alt="photo de l'employe"></img>
      <div>
        <h3>{nom}</h3>
        <h4>{poste}</h4>
      </div>
    </div>
  );
}
