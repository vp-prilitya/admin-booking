import React from "react";
import { Table } from "react-bootstrap";
// import Pagination from "../Pagination";
import Tbody from "../TbodyWithAction";
import Thead from "../Thead";

function TableWithAction({
  actionNotDisplay,
  data,
  thead,
  tbody,
  editUrl,
  deleteAction,
  customAction,
  status,
}) {
  return (
    <>
      <Table hover>
        <Thead text={thead} />
        <Tbody
          status={status}
          data={data}
          display={tbody}
          editUrl={editUrl}
          deleteAction={deleteAction}
          actionNotDisplay={actionNotDisplay}
          customAction={customAction}
        />
      </Table>
      {/* {!withoutPagination && data.length ? (
        <Pagination pages={pages} handlePageClick={handlePageClick} />
      ) : (
        ""
      )} */}
    </>
  );
}

export default TableWithAction;
