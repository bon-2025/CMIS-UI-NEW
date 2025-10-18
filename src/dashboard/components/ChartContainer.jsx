import { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import CardContainer from '../shared/CardContainer';
import StatusChart from './StatusChart';
import RenewedChart from './RenewedChart';
import ExpiringChart from './ExpiringChart';
import ExpiredChart from './ExpiredChart';
import '../style/ChartContainer.css';

function ChartContainer({ statusData = [], renewedData = [],  expiringData = [], expiredData = []}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="py-0">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {/* Slide 1: Pie Chart */}
        <Carousel.Item>
          <CardContainer >
              <StatusChart data={statusData} />
          </CardContainer>
        </Carousel.Item>

        {/* Slide 2: Renewed Bar Chart */}
        <Carousel.Item>
          <CardContainer>
              <RenewedChart data={renewedData} />
          </CardContainer>
        </Carousel.Item>

        {/* Slide 3: Future Chart 1 */}
        <Carousel.Item>
           <CardContainer>
              <ExpiringChart data={expiringData}/>
           </CardContainer>
        </Carousel.Item>

        {/* Slide 4: Future Chart 2 */}
        <Carousel.Item>
          <CardContainer>
             <ExpiredChart data={expiredData}/>
          </CardContainer>
        </Carousel.Item>

      </Carousel>
    </Container>
  );
}

export default ChartContainer;
