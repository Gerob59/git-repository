import EmployeDetailList from "../components/employe/EmployeDetailList";
import Header from "../components/header/Header";

export default function EmployePage({ clicked, click }) {
  return (
    <>
      <Header text="Employee" />

      <EmployeDetailList etat={clicked} onClick={click} />
    </>
  );
}
