import { useEffect, useState } from "react";
import RecordsComponents from "../../components/Records/RecordsComponents";
import { getRecords } from "../../service/Records/recordsService";
import { Spinner, Alert } from "react-bootstrap";

const Records = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const data = await getRecords(); // ✅ call the async function
        setRecords(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="text-center my-5">
        Error: {error}
      </Alert>
    );
  }

  return <RecordsComponents records={records} />;
};

export default Records;
