import "datatables.net-dt/css/jquery.dataTables.css";
import ReactDataTables from "./ReactDataTables";

const data = [
  {
    id: "1",
    name: "Tiger Nixon",
    position: "System Architect",
    salary: "$320,800",
    start_date: "2011/04/25",
    office: "Edinburgh",
    extn: "5421",
  },
  {
    id: "2",
    name: "Garrett Winters",
    position: "Accountant",
    salary: "$170,750",
    start_date: "2011/07/25",
    office: "Tokyo",
    extn: "8422",
  },
];

const columns = [
  { data: "name", title: "Name" },
  { data: "position", title: "Position" },
];

const EmployeeTable = () => {
  return <ReactDataTables data={data} columns={columns} />;
};

function App() {
  return (
    <div className="App">
      <EmployeeTable />
    </div>
  );
}

export default App;
