import EmployeList from "../components/employe/EmployeList";
import EmployeData from "../../data";
import EmployeDetail from "../components/employe/EmployeDetail";

export default function EmployePage({ office, mobile, sms, email, index }) {
  return (
    <div className="details">
      <EmployeList />
      {EmployeData.map((personne, index) => (
        <EmployeDetail key={index} {...personne} />
      ))}
    </div>
  );
}
/*
office={personne.office}
mobile={personne.mobile}
sms={personne.sms}
email={personne.email}
          */
