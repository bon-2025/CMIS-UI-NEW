import ChartContainer from "../components/ChartContainer";

const Home = ({records}) => {
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
        // <ChartContainer statusData={sampleData} renewedData={sampleData} expiringData={sampleData} expiredData={sampleData}/>
        <div className="d-flex fluid p-1 m-4 bg-danger justify-center">
            <div className="d-flex gap-4 bg-success w-100 align-items-center justify-content-center">
                <div className="bg-primary p-3 d-flex" style={{width: "300px", height: "150px"}}>
                    <h1>Total User</h1>
                </div>
                <div className="bg-primary p-3" style={{width: "300px", height: "150px"}}>
                    <h1>Total Renewable</h1>
                </div>
                <div className="bg-primary p-3" style={{width: "300px", height: "150px"}}>
                    <h1>Total Expiring</h1>
                </div>
                <div className="bg-primary p-3" style={{width: "300px", height: "150px"}}>
                    <h1>Total Expired</h1>
                </div>
            </div>
        </div>


    );
}

export default Home