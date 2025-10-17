import { useState } from 'react';
import { Carousel, Card, Container } from 'react-bootstrap';
import PieChart from './PieChart';
import RenewedBarChart from './RenewedBarChart';
import ExpiringBarChart from './ExpiringBarChart';
import ExpiredBarChart from './ExpiredBarChart';
import './ChartDashboard.css';

function ControlledCarousel({ pieData = [], renewedData = [],  expiringData = [], expiredData = []}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="py-0">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {/* Slide 1: Pie Chart */}
        <Carousel.Item>
          <Card className="shadow-sm mx-auto text-center" style={{ maxWidth: '750px' }}>
            <Card.Body>
              <PieChart data={pieData} />
            </Card.Body>
          </Card>
        </Carousel.Item>

        {/* Slide 2: Renewed Bar Chart */}
        <Carousel.Item>
          <Card className="shadow-sm mx-auto text-center" style={{ maxWidth: '750px' }}>
            <Card.Body>
              <RenewedBarChart data={renewedData} />
            </Card.Body>
          </Card>
        </Carousel.Item>

        {/* Slide 3: Future Chart 1 */}
        <Carousel.Item>
          <Card className="shadow-sm mx-auto text-center" style={{ maxWidth: '750px' }}>
            <Card.Body>
              <ExpiringBarChart data={expiringData}/>
            </Card.Body>
          </Card>
        </Carousel.Item>

        {/* Slide 4: Future Chart 2 */}
        <Carousel.Item>
          <Card className="shadow-sm mx-auto text-center" style={{ maxWidth: '750px' }}>
            <Card.Body>
              <ExpiredBarChart data={expiredData}/>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ControlledCarousel;
