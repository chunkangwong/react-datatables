import "datatables.net-dt";
import { Config } from "datatables.net-dt";
import $ from "jquery";
import { useEffect, useRef } from "react";

export function DataTable({ ...props }: Config) {
  const dataTableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const dt = $(dataTableRef.current!).DataTable({
      ...props,
    });
    return () => {
      dt.destroy();
    };
  }, []);

  return <table ref={dataTableRef}></table>;
}

export default DataTable;
