// src/components/records/RecordsModal.jsx
import { Modal, Button } from "react-bootstrap";
import { formatDate } from "../../utils/Record/recordsUtils";

export default function RecordsModal({
  modalInfo,
  closeModal,
  handleArchive,
  handleExtend,
}) {
  const { show, action, record } = modalInfo;

  return (
    <Modal show={show} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{action} Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {record ? (
          <>
            {/* Descendants Information Section */}
            <div className="mb-3">
              <h5 className="mb-2">Descendant Information</h5>
              <p><strong>ID:</strong> {record.id}</p>
              <p><strong>Full Name:</strong> {record.firstName} {record.lastName}</p>
              <p><strong>Status:</strong> {record.status || "Unknown"}</p>
              <p><strong>Type:</strong> {record.contractType}</p>
              <p>
                <strong>Contract:</strong> {formatDate(record.contractStart)} to {formatDate(record.contractEnd)}
              </p>
              <p><strong>Created Date:</strong> {formatDate(record.createdDate)}</p>
            </div>

            {/* Contact Person Section */}
            <div>
              <h5 className="mb-2">Contact Person</h5>
              <p>{record.contactPerson || "N/A"}</p>
            </div>
          </>
        ) : (
          <p>No record selected.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        {action === "Archive" && (
          <Button variant="danger" onClick={handleArchive}>
            Confirm Archive
          </Button>
        )}
        {action === "Extend" && (
          <Button variant="success" onClick={handleExtend}>
            Confirm Extension (Add 1 Year)
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
