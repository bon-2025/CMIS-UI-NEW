import { useState, useEffect } from 'react';
import { Container, Table, Card, Button, Modal, Form } from 'react-bootstrap';

const RecordsComponents = ({ records }) => {
  const [allRecords, setAllRecords] = useState(records);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [filter, setFilter] = useState('all');
  const [modalInfo, setModalInfo] = useState({
    show: false,
    action: '',
    record: null,
  });

  const apiUrl = 'http://localhost:5000/records'; // ✅ Your JSON server source

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  // ✅ Watch for prop updates
  useEffect(() => {
    setAllRecords(records);
  }, [records]);

  // ✅ Filter + sort with "private" condition
  useEffect(() => {
    let updated = [...allRecords];

    if (filter !== 'all') {
      updated = updated.filter((r) => {
        // ✅ Skip status filter if record is "private"
        if (r.contractType?.toLowerCase().includes('private')) return true;
        return r.status === filter;
      });
    }

    updated.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
    setFilteredRecords(updated);
  }, [allRecords, filter]);

  const openModal = (action, record) => {
    setModalInfo({ show: true, action, record });
  };

  const closeModal = () => {
    setModalInfo({ show: false, action: '', record: null });
  };

  const handleArchive = () => {
    console.log(`Archiving record ID ${modalInfo.record.id}`);
    closeModal();
  };

  // ✅ Extend by 1 year and update JSON server
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
    <Container className="my-5">
      <Card className="shadow-lg rounded-4 border-0">
        <Card.Header className="bg-primary text-white py-3 rounded-top-4 d-flex justify-content-between align-items-center px-4">
          <h4 className="mb-0 fw-bold">Submitted Records</h4>
          <Form.Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ width: '200px' }}
          >
            <option value="all">Show All</option>
            <option value="extended">Extended</option>
            <option value="expiring">Expiring</option>
            <option value="expired">Expired</option>
          </Form.Select>
        </Card.Header>

        <Card.Body>
          {filteredRecords.length === 0 ? (
            <p className="text-center text-secondary fst-italic my-5">
              No records match the selected filter.
            </p>
          ) : (
            <div style={{ maxHeight: '450px', overflowY: 'auto' }}>
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
                      <td>
                        {record.firstName} {record.lastName}
                      </td>

                      {/* ✅ Status logic updated */}
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
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="me-2"
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
                          variant="outline-warning"
                          size="sm"
                          onClick={() => openModal('Edit', record)}
                        >
                          Edit
                        </Button>
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
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>

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
