import { useState, useEffect } from 'react';
import { Container, Table, Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';

const RecordsComponents = ({ records }) => {
  const [allRecords, setAllRecords] = useState(records);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [filter, setFilter] = useState('all');
  const [modalInfo, setModalInfo] = useState({
    show: false,
    action: '',
    record: null,
  });

  const apiUrl = 'http://localhost:5000/records';

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    setAllRecords(records);
  }, [records]);

  useEffect(() => {
    let updated = [...allRecords];
    if (filter !== 'all') {
      updated = updated.filter((r) => {
        if (r.contractType?.toLowerCase().includes('private')) return true;
        return r.status === filter;
      });
    }
    updated.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
    setFilteredRecords(updated);
  }, [allRecords, filter]);

  const openModal = (action, record) => setModalInfo({ show: true, action, record });
  const closeModal = () => setModalInfo({ show: false, action: '', record: null });

  const handleArchive = () => {
    console.log(`Archiving record ID ${modalInfo.record.id}`);
    closeModal();
  };

  const handleExtend = async () => {
    const record = modalInfo.record;
    const oldEnd = new Date(record.contractEnd);
    const newEnd = new Date(oldEnd);
    newEnd.setFullYear(newEnd.getFullYear() + 1);

    const updatedRecord = {
      ...record,
      status: 'extended',
      contractEnd: newEnd.toISOString(),
    };

    try {
      const res = await fetch(`${apiUrl}/${record.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRecord),
      });

      if (!res.ok) throw new Error('Failed to update record');

      setAllRecords((prev) =>
        prev.map((r) => (r.id === record.id ? updatedRecord : r))
      );
      closeModal();
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  return (
    <Container fluid className="my-4 px-3">
      <Card className="shadow-lg rounded-4 border-0">
        <Card.Header className="bg-primary text-white py-3 rounded-top-4">
          <Row className="align-items-center">
            <Col xs={12} md={6} className="text-center text-md-start mb-2 mb-md-0">
              <h4 className="mb-0 fw-bold">Submitted Records</h4>
            </Col>
            <Col xs={12} md={6} className="text-center text-md-end">
              <Form.Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-100 w-md-auto"
              >
                <option value="all">Show All</option>
                <option value="extended">Extended</option>
                <option value="expiring">Expiring</option>
                <option value="expired">Expired</option>
              </Form.Select>
            </Col>
          </Row>
        </Card.Header>

        <Card.Body className="p-2 p-md-3">
          {filteredRecords.length === 0 ? (
            <p className="text-center text-secondary fst-italic my-5">
              No records match the selected filter.
            </p>
          ) : (
            <div className="table-responsive" style={{ maxHeight: '450px', overflowY: 'auto' }}>
              <Table striped hover responsive className="mb-0 align-middle">
                <thead
                  style={{
                    position: 'sticky',
                    top: 0,
                    backgroundColor: '#0d6efd',
                    color: 'white',
                    zIndex: 10,
                  }}
                >
                  <tr>
                    <th className="text-center">ID</th>
                    <th>Full Name</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Contract Start</th>
                    <th>Contract End</th>
                    <th>Created Date</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((record) => (
                    <tr key={record.id}>
                      <td className="text-center fw-semibold">{record.id}</td>
                      <td className="text-truncate" style={{ maxWidth: '150px' }}>
                        {record.firstName} {record.lastName}
                      </td>
                      <td>
                        {record.contractType?.toLowerCase().includes('private') ? (
                          <span className="text-muted fst-italic">N/A</span>
                        ) : (
                          <span
                            className={`badge ${
                              record.status === 'expired'
                                ? 'bg-danger'
                                : record.status === 'extended'
                                ? 'bg-success'
                                : record.status === 'expiring'
                                ? 'bg-warning text-dark'
                                : 'bg-secondary'
                            }`}
                          >
                            {record.status
                              ? record.status.charAt(0).toUpperCase() +
                                record.status.slice(1)
                              : 'Unknown'}
                          </span>
                        )}
                      </td>

                      <td>{record.contractType || 'N/A'}</td>
                      <td>{formatDate(record.contractStart)}</td>
                      <td>{formatDate(record.contractEnd)}</td>
                      <td>{formatDate(record.createdDate)}</td>

                      <td className="text-center">
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                          <Button
                            variant="outline-success"
                            size="sm"
                            onClick={() => openModal('Extend', record)}
                            disabled={
                              record.status === 'expired' ||
                              record.contractType?.toLowerCase().includes('private')
                            }
                          >
                            Extend
                          </Button>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => openModal('Archive', record)}
                          >
                            Archive
                          </Button>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => openModal('View', record)}
                          >
                            View
                          </Button>
                          <Button
                            variant="outline-warning"
                            size="sm"
                            onClick={() => openModal('Edit', record)}
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
                <p><strong>Status:</strong> 
                  {modalInfo.record.contractType?.toLowerCase().includes('private')
                    ? 'N/A'
                    : modalInfo.record.status || 'Unknown'}
                </p>
                <p><strong>Type:</strong> {modalInfo.record.contractType}</p>
                <p><strong>Contract:</strong> {formatDate(modalInfo.record.contractStart)} to {formatDate(modalInfo.record.contractEnd)}</p>
                <p><strong>Created Date:</strong> {formatDate(modalInfo.record.createdDate)}</p>
              </>
            ) : (
              <p>No record selected.</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Close</Button>
            {modalInfo.action === 'Archive' && (
              <Button variant="danger" onClick={handleArchive}>
                Confirm Archive
              </Button>
            )}
            {modalInfo.action === 'Extend' && (
              <Button variant="success" onClick={handleExtend}>
                Confirm Extension (Add 1 Year)
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </Card>
    </Container>
  );
};

export default RecordsComponents;
