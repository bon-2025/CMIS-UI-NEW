export const getDashboardData = () => ({
  widgets: [
    { color: 'primary', title: 'Total descendants', value: 300 },
    { color: 'success', title: 'Active descendants', value: 300 },
    { color: 'warning', title: 'Pending descendants', value: 300 },
    { color: 'danger', title: 'Inactive descendants', value: 300 },
  ],
  chartData: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'descendants',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: '#5856d6',
        data: [65, 59, 84, 84, 51, 55, 40],
      },
    ],
  },
  statusWidgets: [
    { title: 'Renewable', color: 'success', value: '89.9%', progress: 75 },
    { title: 'Expiring', color: 'warning', value: '67.4%', progress: 60 },
    { title: 'Expired', color: 'danger', value: '23.2%', progress: 35 },
  ],
})
