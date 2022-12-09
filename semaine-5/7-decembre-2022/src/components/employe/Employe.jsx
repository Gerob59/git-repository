import "./employe.css";
export default function Employe({ photo, nom, poste }) {
  return (
    <div className="Employe">
      <img className="photo-employe" src={photo} alt="photo de l'employe"></img>
      <div>
        <h3>{nom}</h3>
        <h4>{poste}</h4>
      </div>
    </div>
  );
}
