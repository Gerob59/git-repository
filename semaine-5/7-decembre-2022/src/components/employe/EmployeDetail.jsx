export default function EmployeDetail({
  photo,
  nom,
  poste,
  office,
  mobile,
  sms,
  email,
}) {
  return (
    <>
      <div className="Employe">
        <img
          className="photo-employe"
          src={photo}
          alt="photo de l'employe"
        ></img>
        <div>
          <h3>{nom}</h3>
          <h4>{poste}</h4>
        </div>
      </div>
      <div className="details-Employe">
        <p>
          Call Office <br />
          {office}
        </p>
        <p>
          Call Mobile <br />
          {mobile}
        </p>
        <p>
          SMS <br />
          {sms}
        </p>
        <p>
          Email <br />
          {email}
        </p>
      </div>
    </>
  );
}
