import React, { useState, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, Form } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);

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
      return date.toLocaleString('default', { month: 'short' }); // e.g., Nov
    case 'day':
      return date.toLocaleString('default', { weekday: 'short' }); // e.g., Mon
    default:
      return null;
  }
};

const PieChart = ({ data = [] }) => {
  const [granularity, setGranularity] = useState('month');
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Build groups for dropdown
  const groups = useMemo(() => {
    if (!Array.isArray(data)) return [];
    const groupSet = new Set();

    data.forEach(item => {
      const key = formatDate(item?.date, granularity);
      if (key) groupSet.add(key);
    });

    const groupArr = Array.from(groupSet);

    // Sort groups appropriately
    if (granularity === 'decade') {
      groupArr.sort(); // '2000s', '2010s', etc.
    } else if (granularity === 'month') {
      const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      groupArr.sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b));
    } else if (granularity === 'day') {
      const dayOrder = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      groupArr.sort((a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b));
    }

    return groupArr;
  }, [data, granularity]);

  // If no selected group or group no longer exists, pick first
  React.useEffect(() => {
    if (groups.length && !groups.includes(selectedGroup)) {
      setSelectedGroup(groups[0]);
    } else if (!groups.length) {
      setSelectedGroup(null);
    }
  }, [groups, selectedGroup]);

  // Filter data by selectedGroup
  const filteredData = useMemo(() => {
    if (!selectedGroup) return [];
    return data.filter(item => {
      const key = formatDate(item?.date, granularity);
      return key === selectedGroup;
    });
  }, [data, granularity, selectedGroup]);

  // Count statuses in filteredData
  const statusCounts = useMemo(() => {
    const counts = { renewed: 0, expiring: 0, expired: 0 };
    filteredData.forEach(item => {
      const status = String(item.status || '').trim().toLowerCase();
      if (counts.hasOwnProperty(status)) counts[status]++;
    });
    return counts;
  }, [filteredData]);

  const total = Object.values(statusCounts).reduce((a, b) => a + b, 0);

  const chartData = {
    labels: ['Renewed', 'Expiring', 'Expired'],
    datasets: [
      {
        data: [statusCounts.renewed, statusCounts.expiring, statusCounts.expired],
        backgroundColor: ['#10b981', '#facc15', '#ef4444'],
        borderColor: ['#fff', '#fff', '#fff'],
        borderWidth: 2,
      },
    ],
  };

    return (
    <Card
    
        style={{
        width: '700px',
        height: '600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        }}
        className="shadow-sm p-3"
    >
        <Card.Body>
        <Card.Title>Status</Card.Title>

        <Form.Group className="mb-3" controlId="granularitySelect">
            <Form.Label>Group by</Form.Label>
            <Form.Select value={granularity} onChange={e => setGranularity(e.target.value)}>
            <option value="decade">Decade</option>
            <option value="month">Month</option>
            <option value="day">Day of Week</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4" controlId="groupSelect">
            <Form.Label>Select {granularity}</Form.Label>
            <Form.Select
            value={selectedGroup || ''}
            onChange={e => setSelectedGroup(e.target.value)}
            disabled={groups.length === 0}
            >
            {groups.length === 0 && <option>No groups available</option>}
            {groups.map(group => (
                <option key={group} value={group}>
                {group}
                </option>
            ))}
            </Form.Select>
        </Form.Group>

        {total === 0 ? (
            <p className="text-center">No data available for selected group.</p>
        ) : (
            <div style={{ height: '350px' }}>
            <Pie data={chartData} />
            </div>
        )}
        </Card.Body>
    </Card>
    );

};

export default PieChart;
