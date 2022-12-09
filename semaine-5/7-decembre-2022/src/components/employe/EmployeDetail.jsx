import "./employeDetail.css";
export default function EmployeDetail({ office, mobile, sms, email }) {
  return (
    <>
      <div className="details">
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
