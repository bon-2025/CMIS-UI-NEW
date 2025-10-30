import { Container, Card, Row, Col } from "react-bootstrap";
import RecordsFilter from "./RecordsFilter";
import RecordsTable from "./RecordsTable";
import RecordsModal from "./RecordsModal";
import { useRecords } from "../../hook/Records/useRecords";

export default function RecordsComponents({ records }) {
  const {
    filteredRecords,
    filter,
    setFilter,
    modalInfo,
    openModal,
    closeModal,
    handleArchive,
    handleExtend,
  } = useRecords(records);

  return (
    <Container fluid className="my-4 px-3">
      <Card className="shadow-lg rounded-4 border-0">
        <Card.Header className="bg-primary text-white py-3 rounded-top-4">
          <Row className="align-items-center">
            <Col xs={12} md={6} className="text-center text-md-start mb-2 mb-md-0">
              <h4 className="mb-0 fw-bold">Submitted Records</h4>
            </Col>
            <Col xs={12} md={6} className="text-center text-md-end">
              <RecordsFilter filter={filter} setFilter={setFilter} />
            </Col>
          </Row>
        </Card.Header>

        <Card.Body className="p-2 p-md-3">
          {filteredRecords.length === 0 ? (
            <p className="text-center text-secondary fst-italic my-5">
              No records match the selected filter.
            </p>
          ) : (
            <RecordsTable records={filteredRecords} openModal={openModal} />
          )}
        </Card.Body>

        <RecordsModal
          modalInfo={modalInfo}
          closeModal={closeModal}
          handleArchive={handleArchive}
          handleExtend={handleExtend}
        />
      </Card>
    </Container>
  );
}
