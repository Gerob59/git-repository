import "./employeDetail.css";
export default function EmployeDetail({ office, mobile, sms, email }) {
  return (
    <>
      <div className="Details">
        <p className="Categorie">Call Office</p>
        <p className="Information">{office}</p>
        <p className="Categorie">Call Mobile</p>
        <p className="Information">{mobile}</p>
        <p className="Categorie">SMS</p>
        <p className="Information">{sms}</p>
        <p className="Categorie">Email</p>
        <p className="Information">{email}</p>
      </div>
    </>
  );
}
