import { useState, useMemo } from 'react';
import { Container, Card, Form } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const formatDate = (dateStr, granularity) => {
  const date = new Date(dateStr);
  if (isNaN(date)) return null;

  switch (granularity) {
    case 'decade': {
      const year = date.getFullYear();
      const decade = Math.floor(year / 10) * 10;
      return `${decade}s`;
    }
    case 'month':
      return date.toLocaleString('default', { month: 'short' });
    case 'day':
      return date.toLocaleString('default', { weekday: 'short' });
    default:
      return null;
  }
};

const ExpiredChart = ({data}) => {
const [granularity, setGranularity] = useState('month');

  const { labels, counts } = useMemo(() => {
    const grouped = {};

    data.forEach(item => {
      const status = String(item?.status || '').trim().toLowerCase();
      const key = formatDate(item?.date, granularity);
      if (status === 'expired' && key) {
        grouped[key] = (grouped[key] || 0) + 1;
      }
    });

    let sortedLabels = Object.keys(grouped);

    if (granularity === 'decade') {
      sortedLabels.sort();
    } else if (granularity === 'month') {
      const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      sortedLabels.sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
    } else if (granularity === 'day') {
      const dayOrder = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      sortedLabels.sort((a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b));
    }

    const values = sortedLabels.map(label => grouped[label]);
    return { labels: sortedLabels, counts: values };
  }, [data, granularity]);

  const total = counts.reduce((a, b) => a + b, 0);

  if (total === 0) {
    return (
      <Container className="p-0">
        <Card
          className="shadow-sm text-center p-4"
          style={{ width: '700px', height: '600px', margin: '0 auto' }}
        >
          <Card.Body>
            <Card.Title>Expired Over Time</Card.Title>
            <p>No expired data available to display.</p>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Expired Count',
        data: counts,
        backgroundColor: '#ef4444', // red
        borderColor: '#dc2626',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container className="p-0">
      <Card
        className="shadow-sm"
        style={{
          width: '700px',
          height: '600px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Card.Body>
          <Card.Title className="mb-4">Expired Contract</Card.Title>

          <Form.Group className="mb-4" controlId="granularitySelect">
            <Form.Label>Group by</Form.Label>
            <Form.Select
              value={granularity}
              onChange={(e) => setGranularity(e.target.value)}
            >
              <option value="decade">Decade</option>
              <option value="month">Month</option>
              <option value="day">Day of Week</option>
            </Form.Select>
          </Form.Group>

          <div style={{ height: '350px' }}>
            <Bar
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: { enabled: true },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 },
                  },
                },
              }}
            />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ExpiredChart;
