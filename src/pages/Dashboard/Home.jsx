import ChartDashboard from '../../components/ChartDashboard';

import React from 'react';

const Home = () => {
    const sampleData = [
        { id: 1, status: 'renewed', date: '2012-11-05' },
        { id: 2, status: 'expired', date: '2019-06-20' },
        { id: 3, status: 'renewed', date: '2023-11-07' },
        { id: 4, status: 'expiring', date: '2022-12-15' },
        { id: 5, status: 'renewed', date: '2018-11-19' },
        { id: 6, status: 'expired', date: '2010-07-02' },
        { id: 7, status: 'renewed', date: '2005-11-01' },
        { id: 8, status: 'renewed', date: '2011-12-21' },
        { id: 9, status: 'expired', date: '2016-06-30' },
    ];
    return (
        <ChartDashboard pieData={sampleData} renewedData={sampleData} expiringData={sampleData} expiredData={sampleData}/>
    );
}

export default Home;
