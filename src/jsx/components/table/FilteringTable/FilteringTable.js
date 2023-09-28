import React, { useMemo, useContext, useState, useEffect } from "react";

import { useQuery, useMutation } from "@apollo/react-hooks";
import PageTitle from "../../../layouts/PageTitle";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import Modal from "react-bootstrap/Modal";
import { COLUMNS } from "./Columns";
import { GlobalFilter } from "./GlobalFilter";
//import './table.css';
import "./filtering.css";
import { AuthContext } from "../../context-auth/auth";
import { GET_APPLICATIONS } from "../../../../Graphql/Queries";
import { GET_SELECTED_APPLICATION } from "../../../../Graphql/Mutations";

export const FilteringTable = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const { user } = useContext(AuthContext);

  const {
    loading: userLoading,
    data: userApplications,
    refetch,
  } = useQuery(GET_APPLICATIONS, {
    variables: {
      userId: user.id,
    },
  });

  const [getSelectedApplication, { loading }] = useMutation(
    GET_SELECTED_APPLICATION,
    {
      update(_, result) {
        var rowsData = [];

        rowsData.push({
          name: result.data.getSelectedApplication.name,
          surname: result.data.getSelectedApplication.surname,
          idNumber: result.data.getSelectedApplication.idNumber,
          status: result.data.getSelectedApplication.status,
          reason: result.data.getSelectedApplication.reason,
        });
        let left = 15;
        let top = 8;
        const imgWidth = 30;
        const imgHeight = 30;

        const doc = new jsPDF();
        var img = new Image();
        img.src = require("../../../../images/logo-full.png");
        doc.addImage(img, "png", left, top, imgWidth, imgHeight);
        doc.setFont(undefined, "bold");
        doc.text("Application Report", 80, 44);

        doc.setFontSize(10);
        doc.setFont(undefined, "bold");
        doc
          .text("CANDIDATE PERSONAL INFORMATION", 15, 60)
          .setFont(undefined, "bold");
        doc.autoTable({
          startY: 70,
          startX: 10,
          headStyles: { fillColor: [143, 34, 13] },
          columns: [
            { dataKey: "name", header: "Name" },
            { dataKey: "surname", header: "Surname" },
            { dataKey: "idNumber", header: "Id Number" },
            { dataKey: "status", header: "Status" },
            { dataKey: "reason", header: "Reason" },
          ],
          body: rowsData,
        });

        doc.save("report.pdf");
      },
      onError(err) {
        console.lo("Application Not Found! " + err);
      },

      variables: {
        id,
      },
    }
  );

  function downloadPdf(id) {
    /* let left = 15;
    let top = 8;
    const imgWidth = 30;
    const imgHeight = 30;

    const doc = new jsPDF();
    var img = new Image();
    img.src = require("../../../../images/logo-full.png");
    doc.addImage(img, "png", left, top, imgWidth, imgHeight);
    doc.setFont(undefined, "bold");
    doc.text("Application Report", 80, 44);

    doc.setFontSize(10);
    doc.setFont(undefined, "bold");
    doc
      .text("PERSONAL INFORMATION OF CANDIDATE", 15, 50)
      .setFont(undefined, "bold");
    doc.autoTable({
      startY: 129,
      startX: 10,
      headStyles: { fillColor: [143, 34, 13] },
      columns: [
        { dataKey: "firstName", header: "Name" },

        { dataKey: "lastName", header: "Surname" },
        { dataKey: "idNumber", header: "Id Number" },
        { dataKey: "status", header: "Status" },
        { dataKey: "reason", header: "Reason" },
      ],
      body: applicationData,
    });

    doc.save("report.pdf");*/
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch(); // Call the refetch function to execute the query again
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [refetch]);

  //Assign Data
  var newData = [];
  if (userApplications) {
    newData = userApplications.getApplications;
  }

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => newData, []);
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    page,
    gotoPage,
    pageCount,
    pageOptions,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  function handleButtonClick(row) {
    const rowData = row.original;
    if (rowData.status == "Declined") {
      setShow(true);
    } else {
      alert("Can not upload document because the application was declined!");
    }
  }

  function handlePDFDownload(rowId) {
    // getSelectedApplication();
  }

  useEffect(() => {
    getSelectedApplication();
  }, [id]);

  return (
    <>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Documents</Modal.Title>
        </Modal.Header>
        <section className="upload-section">
          <div className="row emial-setup">
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="form-group mb-3">
                <label
                  htmlFor="mailclient14"
                  className="mailclinet mailclinet-another">
                  <input
                    type="file"
                    className="redio-false"
                    name="emailclient"
                    id="mailclient14"
                  />
                  <span className="mail-icon">
                    <i
                      className="mdi mdi-account-box-outline"
                      aria-hidden="true"
                      style={{ color: "#DB3227" }}></i>
                  </span>
                  <span className="mail-text">ID</span>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="form-group mb-3">
                <label
                  htmlFor="mailclient13"
                  className="mailclinet mailclinet-drive">
                  <input
                    type="file"
                    className="redio-false"
                    name="emailclient"
                    id="mailclient13"
                  />
                  <span className="mail-icon">
                    <i
                      className="mdi mdi-content-copy"
                      aria-hidden="true"
                      style={{ color: "#DB3227" }}></i>
                  </span>
                  <span className="mail-text">Proof Of Address</span>
                </label>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="form-group mb-3">
                <label
                  htmlFor="mailclient13"
                  className="mailclinet mailclinet-drive">
                  <input
                    type="file"
                    className="redio-false"
                    name="emailclient"
                    id="mailclient13"
                  />
                  <span className="mail-icon">
                    <i
                      className="mdi mdi-checkbox-multiple-blank-outline"
                      aria-hidden="true"
                      style={{ color: "#DB3227" }}></i>
                  </span>
                  <span className="mail-text">3 Months Bank Statement</span>
                </label>
              </div>
            </div>
          </div>
        </section>
        <div className="upload-div">
          <button
            className="btn btn-primary btn-sm sw-btn-next ms-1 upload-button"
            onClick={() => setShow(false)}>
            Upload Documentss
          </button>
        </div>
      </Modal>
      <PageTitle activeMenu="Applications" motherMenu="Latest" />
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Applications</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()} className="table dataTable display">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                        {column.canFilter ? column.render("Filter") : null}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="">
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {" "}
                            {cell.render("Cell")}{" "}
                          </td>
                        );
                      })}
                      <td>
                        <button
                          className="btn btn-primary btn-sm sw-btn-next ms-1"
                          onClick={() => handleButtonClick(row)}>
                          Docs
                        </button>
                      </td>
                      <td>
                        <i
                          className="mdi mdi-download"
                          aria-hidden="true"
                          style={{
                            color: "#DB3227",
                            fontSize: 22,
                            cursor: "pointer",
                          }}
                          onClick={() => setId(row.original.id)}></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="d-flex justify-content-between">
              <span>
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>
                {""}
              </span>
              <span className="table-index">
                Go to page :{" "}
                <input
                  type="number"
                  className="ml-2"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                />
              </span>
            </div>
            <div className="text-center mb-3">
              <div className="filter-pagination  mt-3">
                <button
                  className=" previous-button"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}>
                  {"<<"}
                </button>

                <button
                  className="previous-button"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}>
                  Previous
                </button>
                <button
                  className="next-button"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}>
                  Next
                </button>
                <button
                  className=" next-button"
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}>
                  {">>"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilteringTable;
