import DataTables, { Config } from "datatables.net-dt";
import { useEffect, useRef } from "react";

export function ReactDataTables({ ...props }: Config) {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const dt = new DataTables(tableRef.current!, {
      ...props,
    });
    return () => {
      dt.destroy();
    };
  }, []);

  return <table ref={tableRef}></table>;
}

export default ReactDataTables;
