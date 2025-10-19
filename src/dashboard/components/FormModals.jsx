// components/FormModals.jsx
import { Modal, Spinner, Button } from 'react-bootstrap';

const FormModals = ({ isSubmitting, showValidationModal, setShowValidationModal }) => {
  return (
    <>
      {/* Submitting Modal */}
      <Modal show={isSubmitting} backdrop="static" keyboard={false} centered>
        <Modal.Body
          className="text-center py-5"
          style={{
            backgroundColor: '#f0f8ff',
            borderRadius: '10px',
            fontFamily: 'Segoe UI, sans-serif',
            boxShadow: '0 0 10px rgba(0, 123, 255, 0.2)',
          }}
        >
          <Spinner animation="border" role="status" variant="primary" className="mb-3" />
          <h5 className="text-primary">Submitting, please wait...</h5>
          <p className="text-muted mt-2" style={{ fontSize: '0.9rem' }}>
            Your data is being securely sent.
          </p>
        </Modal.Body>
      </Modal>

      {/* Validation Error Modal */}
      <Modal
        show={showValidationModal}
        onHide={() => setShowValidationModal(false)}
        centered
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: '#fff3cd',
            borderBottom: '1px solid #ffeeba',
            fontFamily: 'Segoe UI, sans-serif',
          }}
        >
          <Modal.Title className="text-warning">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            Form Incomplete
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#fffdf6', fontFamily: 'Segoe UI, sans-serif' }}>
          <p className="mb-0 text-dark">
            Please ensure all required fields are completed before submitting the form.
          </p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#fffdf6' }}>
          <Button variant="warning" onClick={() => setShowValidationModal(false)}>
            <i className="bi bi-check-circle me-2"></i> Got it
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModals;
