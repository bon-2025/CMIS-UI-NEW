// src/components/records/RecordsTable.jsx
import { Table, Button } from "react-bootstrap";
import { useState } from "react";
import { formatDate } from "../../utils/Record/recordsUtils";
import RecordsModal from "./RecordsModal";

export default function RecordsTable({ records, handleArchive, handleExtend }) {
  const [modalInfo, setModalInfo] = useState({ show: false, action: "", record: null });

  const openModal = (action, record) => {
    setModalInfo({ show: true, action, record });
  };

  const closeModal = () => {
    setModalInfo({ show: false, action: "", record: null });
  };

  return (
    <>
      <div className="table-responsive" style={{ maxHeight: "450px", overflowY: "auto" }}>
        <Table striped hover responsive className="mb-0 align-middle">
          <thead
            style={{
              position: "sticky",
              top: 0,
              backgroundColor: "#0d6efd",
              color: "white",
              zIndex: 10,
            }}
          >
            <tr>
              <th className="text-center">ID</th>
              <th>Full Name</th>
              <th>Status</th>
              <th>Type</th>
              <th>Created Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className="text-center fw-semibold">{record.id}</td>
                <td className="text-truncate" style={{ maxWidth: "150px" }}>
                  {record.firstName} {record.lastName}
                </td>
                <td>
                  {record.contractType?.toLowerCase().includes("private") ? (
                    <span className="text-muted fst-italic">N/A</span>
                  ) : (
                    <span
                      className={`badge ${
                        record.status === "expired"
                          ? "bg-danger"
                          : record.status === "extended"
                          ? "bg-success"
                          : record.status === "expiring"
                          ? "bg-warning text-dark"
                          : "bg-secondary"
                      }`}
                    >
                      {record.status
                        ? record.status.charAt(0).toUpperCase() + record.status.slice(1)
                        : "Unknown"}
                    </span>
                  )}
                </td>
                <td>{record.contractType || "N/A"}</td>
                <td>{formatDate(record.createdDate)}</td>
                <td className="text-center">
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => openModal("Extend", record)}
                      disabled={
                        record.status === "expired" ||
                        record.contractType?.toLowerCase().includes("private")
                      }
                    >
                      Extend
                    </Button>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => openModal("Archive", record)}
                    >
                      Archive
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => openModal("View", record)}
                    >
                      View
                    </Button>
                    <Button
                      variant="outline-warning"
                      size="sm"
                      onClick={() => openModal("Edit", record)}
                    >
                      Edit
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Records Modal */}
      <RecordsModal
        modalInfo={modalInfo}
        closeModal={closeModal}
        handleArchive={() => handleArchive(modalInfo.record)}
        handleExtend={() => handleExtend(modalInfo.record)}
      />
    </>
  );
}
