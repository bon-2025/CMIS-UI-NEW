import React, { useEffect, useState } from 'react';
import RecordsComponents from '../../components/RecordsComponents';

const Records = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await fetch('http://localhost:5000/records');
        if (!res.ok) {
          throw new Error('Failed to fetch records');
        }
        const data = await res.json();
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
    return <div className="text-center my-5">Loading records...</div>;
  }

  if (error) {
    return <div className="text-center text-danger my-5">Error: {error}</div>;
  }

  return <RecordsComponents records={records} />;
};

export default Records;
