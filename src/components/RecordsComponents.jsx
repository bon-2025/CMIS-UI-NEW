import { useState, useEffect } from 'react';
import { Container, Table, Card, Button, Modal } from 'react-bootstrap';

const RecordsComponents = ({ records }) => {
  const [modalInfo, setModalInfo] = useState({
    show: false,
    action: '',
    record: null,
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  // Determine status based on contractEnd date
  const getStatus = (endDate) => {
    const now = new Date();
    const contractEnd = new Date(endDate);
    const daysLeft = (contractEnd - now) / (1000 * 60 * 60 * 24);

    if (daysLeft < 0) return 'expired';
    if (daysLeft <= 30) return 'expiring';
    return 'renewed';
  };

  const openModal = (action, record) => {
    setModalInfo({ show: true, action, record });
  };

  const closeModal = () => {
    setModalInfo({ show: false, action: '', record: null });
  };

  const handleArchive = () => {
    // You can implement actual DELETE request here
    console.log(`Archiving record ID ${modalInfo.record.id}`);
    closeModal();
  };

  return (
    <Container className="my-5">
      <Card className="shadow-lg rounded-4 border-0">
        <Card.Header className="bg-primary text-white text-center py-3 rounded-top-4">
          <h4 className="mb-0 fw-bold">Submitted Records</h4>
        </Card.Header>
        <Card.Body>
          {records.length === 0 ? (
            <p className="text-center text-secondary fst-italic my-5">
              No records available.
            </p>
          ) : (
            <div style={{ maxHeight: '450px', overflowY: 'auto' }}>
              <Table striped hover responsive className="mb-0 align-middle">
                <thead style={{ position: 'sticky', top: 0, backgroundColor: '#0d6efd', color: 'white', zIndex: 10 }}>
                  <tr>
                    <th className="text-center">ID</th>
                    <th>Full Name</th>
                    <th>Status</th>
                    <th>Contract Start</th>
                    <th>Contract End</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => {
                    const status = getStatus(record.contractEnd);
                    return (
                      <tr key={record.id}>
                        <td className="text-center fw-semibold">{record.id}</td>
                        <td>{record.firstName} {record.lastName}</td>
                        <td>
                          <span
                            className={`badge ${
                              status === 'expired'
                                ? 'bg-danger'
                                : status === 'renewed'
                                ? 'bg-success'
                                : status === 'expiring'
                                ? 'bg-warning text-dark'
                                : 'bg-secondary'
                            }`}
                          >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </span>
                        </td>
                        <td>{formatDate(record.contractStart)}</td>
                        <td>{formatDate(record.contractEnd)}</td>
                        <td className="text-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            className="me-2"
                            onClick={() => openModal('Archive', record)}
                          >
                            Archive
                          </Button>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-2"
                            onClick={() => openModal('View', record)}
                          >
                            View
                          </Button>
                          <Button
                            variant="outline-success"
                            size="sm"
                            onClick={() => openModal('Edit', record)}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          )}
        </Card.Body>

        {/* Modal */}
        <Modal show={modalInfo.show} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalInfo.action} Record</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalInfo.record ? (
              <>
                <p><strong>ID:</strong> {modalInfo.record.id}</p>
                <p><strong>Full Name:</strong> {modalInfo.record.firstName} {modalInfo.record.lastName}</p>
                <p><strong>Status:</strong> {getStatus(modalInfo.record.contractEnd)}</p>
                <p><strong>Contract:</strong> {formatDate(modalInfo.record.contractStart)} to {formatDate(modalInfo.record.contractEnd)}</p>
              </>
            ) : (
              <p>No record selected.</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            {modalInfo.action === 'Archive' && (
              <Button variant="danger" onClick={handleArchive}>
                Confirm Archive
              </Button>
            )}
            {modalInfo.action === 'Edit' && (
              <Button variant="success" disabled>Edit functionality coming soon</Button>
            )}
            {modalInfo.action === 'View' && (
              <Button variant="primary" disabled>View details coming soon</Button>
            )}
          </Modal.Footer>
        </Modal>
      </Card>
    </Container>
  );
};

export default RecordsComponents;
