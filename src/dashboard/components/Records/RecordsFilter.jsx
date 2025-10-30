// src/components/records/RecordsFilter.jsx
import { Form } from "react-bootstrap";

export default function RecordsFilter({ filter, setFilter }) {
  return (
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
  );
}
