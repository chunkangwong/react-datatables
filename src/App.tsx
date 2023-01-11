import "datatables.net-dt/css/jquery.dataTables.css";
import DataTable from "./DataTable";
import data from "./DataTable/data";

function App() {
  return (
    <div className="App">
      <DataTable
        data={data}
        columns={[{ data: "name" }, { data: "position" }]}
      />
    </div>
  );
}

export default App;
