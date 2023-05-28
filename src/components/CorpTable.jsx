import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { tableColumns } from "../utilities/tableconfig";
import "../styles/CorpTable.css";

const CorpTable = ({ data, selectedLanguage }) => {
  const columns = tableColumns(selectedLanguage);

  const getRowId = (row) => row.N_name;

  return (
    <div className="corp-table-container grid grid-cols-1 gap-16">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10} // The DataGrid (MIT license) is limited to pages of up to 100 rows. If you want larger pages, you will need to upgrade to Pro plan or above.
        getRowId={getRowId}
        autoHeight
        disableColumnResize={false}
        disableColumnFilter={false}
      />
    </div>
  );
};

export default CorpTable;
