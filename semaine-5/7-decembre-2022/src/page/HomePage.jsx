import EmployeList from "../components/employe/EmployeList";
import Header from "../components/header/Header";
import Searchbar from "../components/searchbar/Searchbar";
export default function HomePage() {
  return (
    <>
      <Header text="Employee Directory" />
      <Searchbar />
      <EmployeList />
    </>
  );
}
