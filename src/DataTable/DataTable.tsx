import "datatables.net";
import "datatables.net-dt/css/jquery.dataTables.css";
import $ from "jquery";
import { useEffect, useRef } from "react";
import data from "./data";

export function DataTable() {
  const dataTableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const dataTable = $(dataTableRef.current!).DataTable({
      data: data,
      columns: [{ data: "name" }, { data: "position" }],
    });
    return () => {
      dataTable.destroy();
    };
  }, []);

  return (
    <div>
      <table className="display" width="100%" ref={dataTableRef}></table>
    </div>
  );
}

export default DataTable;
