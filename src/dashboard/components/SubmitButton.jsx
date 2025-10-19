// components/SubmitButton.jsx
import { Button, Spinner } from 'react-bootstrap';

const SubmitButton = ({ isSubmitting, onClick, disabled = false, label = "Register" }) => {
  return (
    <div className="mt-3">
      <Button
        type="button"
        className="btn btn-primary"
        onClick={onClick}
        disabled={disabled}
      >
        {isSubmitting ? (
          <>
            <Spinner animation="border" size="sm" className="me-2" />
            Submitting...
          </>
        ) : (
          label
        )}
      </Button>
    </div>
  );
};

export default SubmitButton;
