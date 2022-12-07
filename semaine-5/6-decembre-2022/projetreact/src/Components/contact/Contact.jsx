export default function Contact({ nom, prenom, tel, email, bouton }) {
  return (
    <div className="Contact">
      <h3>
        {nom} <br /> {prenom}
      </h3>
      <h4>
        {tel} <br /> {email}
      </h4>
      {bouton && <button>Supprimer</button>}
    </div>
  );
}
